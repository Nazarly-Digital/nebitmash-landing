#!/usr/bin/env bash
# Выкат сайта «Небитмаш» на корень nebithi.gov.tm. Лежит на сервере nebit
# в /opt/attendance-hub/site/deploy.sh (рядом с сервером учёта, Caddy у них
# общий: /adm и /api — панель, всё остальное — этот сайт).
#
#   sudo ./deploy.sh            — последняя успешная сборка main
#   sudo ./deploy.sh <sha>      — конкретный коммит
#   sudo ./deploy.sh rollback   — вернуть предыдущую версию
#   sudo ./deploy.sh status     — что сейчас отдаётся
#   sudo ./deploy.sh off        — снять сайт: Caddy сам вернёт заглушку «Ýakynda...»
#
# Почему артефакт GitHub Actions, а не git pull + сборка здесь: с сервера
# закрыты npm и github.com, открыты api.github.com и *.blob.core.windows.net,
# куда API отдаёт артефакты (2026-10-09, см. память проекта attendance).
#
# Ключ GitHub — тот же, что у сервера учёта (/opt/attendance-hub/.env,
# GH_TOKEN, читает только root). Он видит только репозиторий attendance,
# поэтому репозиторий сайта открытый: артефакты открытых репозиториев
# скачиваются любым ключом. Сделать репозиторий закрытым — выкат упадёт
# с 404, пока ключ не получит доступ к nebitmash-landing.
#
# Обновить сам скрипт: скопировать новую версию из репозитория (deploy/site.sh).
set -Eeuo pipefail

SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HUB_ENV="$(dirname "$SITE_DIR")/.env"
REPO=Nazarly-Digital/nebitmash-landing
WORKFLOW=build.yml
DOMAIN=nebithi.gov.tm
# Версий на диске: текущая, предыдущая (откат) и запас. Одна весит ~7 МБ.
KEEP=4

[ "$(id -u)" = 0 ] || { echo "Запускай через sudo: sudo $0 ${*:-}" >&2; exit 1; }
cd "$SITE_DIR"
mkdir -p releases

WORK=""
trap '[ -n "$WORK" ] && rm -rf "$WORK"' EXIT

say()  { printf '\n==> %s\n' "$*"; }
ok()   { printf '    OK  %s\n' "$*"; }
log()  { printf '%s %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" >> deploy.log; }
die()  { printf '\n!!! ОШИБКА: %s\n\n' "$*" >&2; log "FAIL $*"; exit 1; }

token() {
  local line
  line="$(grep -m1 '^GH_TOKEN=' "$HUB_ENV" 2>/dev/null)" || die "нет GH_TOKEN в $HUB_ENV"
  line="${line#GH_TOKEN=}"; line="${line%$'\r'}"; line="${line%\"}"; line="${line#\"}"
  printf '%s' "$line"
}
# Токен — через «файл» заголовков, а не аргументом: аргументы видны в ps.
auth() { printf 'Authorization: Bearer %s\n' "$(token)"; }
gh_api() {
  curl -fsS --retry 3 --retry-delay 3 -m 60 -H @<(auth) \
    -H "Accept: application/vnd.github+json" "https://api.github.com/repos/$REPO/$1"
}

current_tag() { readlink current 2>/dev/null | sed 's|^releases/||' || true; }

# Смоук — как его увидит человек: по имени домена через сам Caddy, и
# страница обязана быть той сборкой, что мы только что положили (метка
# build-sha в <head>), а не старой из кэша или чужой.
smoke() {
  local tag="$1" path page code
  for path in / /ru/ /en/; do
    page="$(curl -sS -m 15 --resolve "$DOMAIN:443:127.0.0.1" "https://$DOMAIN$path" -w '\n%{http_code}')" \
      || { echo "    $path — нет ответа"; return 1; }
    code="${page##*$'\n'}"
    [ "$code" = 200 ] || { echo "    $path — ответ $code"; return 1; }
    grep -q "name=\"build-sha\" content=\"$tag" <<<"$page" || { echo "    $path — отвечает не сборка $tag"; return 1; }
  done
  # Панель и связь заведений по этому домену обязаны остаться у сервера учёта.
  code="$(curl -s -o /dev/null -m 15 -w '%{http_code}' --resolve "$DOMAIN:443:127.0.0.1" "https://$DOMAIN/adm/login")"
  [ "$code" = 200 ] || { echo "    /adm/login — ответ $code (панель учёта должна отвечать)"; return 1; }
  ok "/, /ru/, /en/ — сборка $tag; /adm — панель учёта на месте"
}

switch_to() {
  # ln + mv -T — атомарная подмена ссылки: Caddy ни в один момент не видит
  # пустоты (иначе на долю секунды вместо сайта всплыла бы заглушка).
  ln -sfn "releases/$1" current.new && mv -T current.new current
}

cmd_deploy() {
  local want="${1:-latest}" runs run sha tag art url digest actual prev
  say "Ищу сборку: $want"
  if [ "$want" = latest ]; then
    runs="$(gh_api "actions/workflows/$WORKFLOW/runs?branch=main&event=push&status=success&per_page=1")" \
      || die "GitHub не ответил (api.github.com)"
  else
    [[ "$want" =~ ^[0-9a-f]{7,40}$ ]] || die "не понимаю «$want»"
    sha="$(gh_api "commits/$want" | jq -r '.sha // empty')" || true
    [ -n "$sha" ] || die "коммит $want не найден в $REPO"
    runs="$(gh_api "actions/workflows/$WORKFLOW/runs?head_sha=$sha&event=push&status=success&per_page=1")" \
      || die "GitHub не ответил"
  fi
  run="$(jq -c '.workflow_runs[0] // empty' <<<"$runs")"
  [ -n "$run" ] || die "нет успешной сборки main для «$want» — смотри вкладку Actions"
  # Только пуш в main этого же репозитория: сборка чужого PR тоже даёт
  # out/, и выкатить её — значит выложить на gov.tm непросмотренный код.
  [ "$(jq -r '.event' <<<"$run")" = push ] && [ "$(jq -r '.head_branch' <<<"$run")" = main ] \
    && [ "$(jq -r '.head_repository.full_name' <<<"$run")" = "$REPO" ] \
    || die "сборка не из main репозитория $REPO — не ставлю"
  sha="$(jq -r '.head_sha' <<<"$run")"; tag="${sha:0:12}"
  ok "коммит $sha"

  prev="$(current_tag)"
  if [ "$prev" = "$tag" ]; then ok "эта версия уже отдаётся"; return 0; fi

  if [ ! -f "releases/$tag/index.html" ]; then
    art="$(gh_api "actions/runs/$(jq -r '.id' <<<"$run")/artifacts" \
      | jq -c '[.artifacts[] | select(.name=="site" and (.expired|not))][0] // empty')"
    [ -n "$art" ] || die "у сборки нет артефакта site (истёк срок 90 дней?)"
    url="$(jq -r '.archive_download_url' <<<"$art")"; digest="$(jq -r '.digest // empty' <<<"$art")"
    [[ "$digest" =~ ^sha256:[0-9a-f]{64}$ ]] || die "GitHub не отдал sha256 артефакта — непроверенное не ставлю"

    WORK="$(mktemp -d)"
    say "Скачиваю сайт ${tag}"
    # curl не передаёт заголовок авторизации на чужой хост при редиректе
    # (blob.core.windows.net) — ключ не уходит в хранилище Azure.
    curl -fsSL --retry 3 --retry-delay 5 -m 300 -o "$WORK/site.zip" -H @<(auth) "$url" \
      || die "артефакт не скачался — проверь доступ к *.blob.core.windows.net"
    actual="$(sha256sum "$WORK/site.zip" | cut -d' ' -f1)"
    [ "sha256:$actual" = "$digest" ] || die "контрольная сумма не совпала — не распаковываю"
    ok "sha256 совпал"
    python3 -m zipfile -e "$WORK/site.zip" "$WORK/site" || die "архив битый"
    for f in index.html ru/index.html en/index.html 404.html; do
      [ -f "$WORK/site/$f" ] || die "в сборке нет $f — не ставлю"
    done
    chmod -R a+rX,go-w "$WORK/site"
    rm -rf "releases/$tag" && mv "$WORK/site" "releases/$tag"
    ok "$(du -sh "releases/$tag" | cut -f1) в releases/$tag"
  fi

  say "Включаю $tag"
  switch_to "$tag"
  if smoke "$tag"; then
    [ -n "$prev" ] && echo "$prev" > previous
    log "OK deploy $tag (было ${prev:-ничего})"
    cleanup
    say "Готово: https://$DOMAIN/ — $tag${prev:+. Откат: sudo $0 rollback (вернёт $prev)}"
    return 0
  fi
  if [ -n "$prev" ]; then
    switch_to "$prev"
    log "AUTOROLLBACK $tag -> $prev"
    die "сборка $tag не прошла проверку — вернул $prev"
  fi
  rm -f current
  die "сборка $tag не прошла проверку; сайт снят, отдаётся заглушка"
}

cmd_rollback() {
  local cur prev
  cur="$(current_tag)"; prev="$(cat previous 2>/dev/null || true)"
  [ -n "$prev" ] && [ -d "releases/$prev" ] || die "откатываться не на что"
  switch_to "$prev"
  smoke "$prev" || { switch_to "$cur"; die "версия $prev не прошла проверку — оставил $cur"; }
  echo "$cur" > previous
  log "OK rollback $cur -> $prev"
  say "Готово: отдаётся $prev. Вернуть $cur: sudo $0 rollback"
}

cmd_off() {
  local cur; cur="$(current_tag)"
  [ -n "$cur" ] && echo "$cur" > previous
  rm -f current
  log "OFF (было ${cur:-ничего})"
  say "Сайт снят — на $DOMAIN снова заглушка. Вернуть: sudo $0 rollback"
}

cleanup() {
  local cur prev d kept=0
  cur="$(current_tag)"; prev="$(cat previous 2>/dev/null || true)"
  while read -r d; do
    d="${d#releases/}"
    if [ "$d" = "$cur" ] || [ "$d" = "$prev" ] || [ "$kept" -lt "$KEEP" ]; then kept=$((kept + 1)); continue; fi
    rm -rf "releases/$d"
  done < <(ls -1dt releases/*/ 2>/dev/null | sed 's|/$||')
}

cmd_status() {
  echo "отдаётся:  $(current_tag || true)"
  echo "откат на:  $(cat previous 2>/dev/null || echo нет)"
  echo "на диске:  $(ls -1t releases 2>/dev/null | tr '\n' ' ')"
  tail -n 5 deploy.log 2>/dev/null || true
}

for tool in curl jq python3 sha256sum; do command -v "$tool" >/dev/null || die "нет программы $tool"; done
exec 9>deploy.lock
flock -n 9 || die "уже идёт другой выкат сайта"

case "${1:-latest}" in
  rollback) cmd_rollback ;;
  status) cmd_status ;;
  off) cmd_off ;;
  -h|--help|help) sed -n '2,10p' "$0" ;;
  *) cmd_deploy "${1:-latest}" ;;
esac
