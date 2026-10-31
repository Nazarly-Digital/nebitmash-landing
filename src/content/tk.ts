import type { Dict } from "./types";

// Источник — английский каталог предприятия (NEBITMAS_Catalogue_EN, 2026).
// Факты (модели, заказчики, классы напряжения, 18,5 м) не выдумывать:
// любое число здесь покупатель вправе потребовать в договоре.
export const tk: Dict = {
  meta: {
    title: "Nebitmaş — Türkmenistanda senagat önümçiligi",
    description:
      "«Nebitmaş» döwlet kärhanasy: nebit känleri üçin enjamlar, rezerwuarlar we gazanlar, elektrotehniki önümler, howa liniýalary üçin gurluşlar we sargyt boýunça bölekler. 1960-njy ýyldan bäri önümçilik.",
  },
  nav: {
    products: "Önümler",
    customers: "Sargytçylar",
    quality: "Hil",
    order: "Nädip sargyt etmeli",
    future: "Täze ugurlar",
    contacts: "Habarlaşmak",
    call: "Jaň etmek",
    menu: "Menýu",
    close: "Ýapmak",
  },
  hero: {
    ministry: "Türkmenistanyň Senagat we gurluşyk önümçiligi ministrligi",
    enterprise: "Döwlet kärhanasy",
    title: "Senagat üçin önümçilik",
    lead: "Nebit känleri üçin enjamlar, rezerwuarlar we ýylylyk önümleri, elektrotehniki bölekler we polat gurluşlar — 1960-njy ýyldan bäri Aşgabatda öndürilýär we siziň talaplaryňyza laýyk taýýarlanýar.",
    ctaProducts: "Önümleri görmek",
    ctaCall: "Kärhana jaň etmek",
    buildingAlt: "«Nebitmaş» kärhanasynyň dolandyryş binasy",
  },
  president: {
    role: "Türkmenistanyň Prezidenti",
    name: "Serdar Berdimuhamedow",
  },
  stats: [
    { value: "1960", label: "ýyldan bäri önümçilik" },
    { value: "5", label: "önüm ugry" },
    { value: "35–220 kV", label: "elektrik liniýa diregleriniň synplary" },
  ],
  products: {
    eyebrow: "Önüm toplumy",
    title: "Önümler we ulanylyşy",
    lead: "Aşakdaky her model nusga hökmünde berilýär. Ölçegler, materiallar we düzüm siziň iş şertleriňize we resminamalaryňyza görä ylalaşylýar.",
    modelsLabel: "Modeller",
    madeFor: "Kimiň üçin",
    groups: {
      oilgas: "Nebit-gaz enjamlary",
      thermal: "Rezerwuarlar we ýylylyk enjamlary",
      electrical: "Elektrotehniki önümler",
      energy: "Energetika gurluşlary we armaturasy",
      custom: "Wagon-öýler we sargyt boýunça bölekler",
    },
    items: {
      agp: {
        title: "Nebit gyzdyryjylary",
        subtitle: "AGP seriýasy",
        text: "Nebit känlerinde we nebiti gaýtadan işlemekde nebit akymlaryny gyzdyrmak.",
        facts: [
          { title: "Taslama maglumatlary", text: "Gyzdyryş kuwwaty, tehnologik şertler, ýangyç we birikmeler." },
          { title: "Görnüşler", text: "AGP-0.6 we AGP-1.0 esasy modeller; beýleki görnüşlere hem seredilip bilner." },
        ],
      },
      usn: {
        title: "Nebit önümlerini guýmak",
        subtitle: "USN-175 guýujy we boşadyjy enjam",
        text: "Nebit önümlerini saklaýyş we ulag ulgamlarynyň arasynda geçirmek.",
        facts: [
          { title: "Gurluşy", text: "Geçiriji gol we birikdiriji mufta ulgamy." },
          { title: "Taslama maglumatlary", text: "Ýetiş aralygy, gurşaw, birikmeleriň ýerleşişi we ulanyş şertleri." },
        ],
      },
      tanks: {
        title: "Polat rezerwuarlar",
        subtitle: "Silindr we gönüburçly görnüşler",
        text: "Sargytçynyň kesgitlän saklaýyş we tehnologik wezipeleri üçin.",
        facts: [
          { title: "Taýýarlanyşy", text: "Kebşirlenen gabyklar, korpuslar, diregler we bellenen hyzmat elementleri." },
          { title: "Saýlawlar", text: "Göwrümi, ýerleşişi, patrubkalar, diregler we gorag örtügi." },
        ],
      },
      boilers: {
        title: "Suw gyzdyryjy gazanlar",
        subtitle: "KO seriýasy",
        text: "Senagat meýdançalaryny we binalary gyzgyn suw bilen ýylatmak.",
        facts: [
          { title: "Önüm topary", text: "KO-0.2, KO-0.5, KO-1.0 we KO-2.0 nusga mysallardyr." },
          { title: "Saýlamak", text: "Kuwwaty, ýangyjy, suw şertleri we gurluşy ylalaşylan tehniki şertlere laýyk." },
        ],
      },
      cabinets: {
        title: "Paýlaýjy şkaflar",
        subtitle: "Paýlaýjy we yşyklandyryş desgalary üçin korpuslar",
        text: "Ylalaşylan oturdylyşy we kabel girelgesi bolan polat şkaflar.",
        facts: [
          { title: "Düzümi", text: "Ölçegleri, gapylary, içki ýerleşişi we gorag örtügi sargyda görä." },
          { title: "Toplumlaýyn düzümi", text: "Içki enjamlar üpjünçilik spesifikasiýasynda kesgitlenýär." },
        ],
      },
      switching: {
        title: "Kommutasiýa we gorag",
        subtitle: "Rubilnikler, goraýjylar we elektrik kontaktlary",
        text: "Rubilnikler, aýryjylar, goraýjylar we tok geçiriji birikdiriji bölekler.",
        facts: [
          { title: "Kommutasiýa", text: "Rubilnikler we RPS seriýaly aýryjylar." },
          { title: "Gorag", text: "PN-2 we PK seriýaly goraýjylar; transformator kontaktlary." },
        ],
      },
      porcelain: {
        title: "Farfor izolýatorlar",
        subtitle: "Ştyrly, direg, daýanç we geçiriji görnüşler",
        text: "SHF-20 ştyrly izolýator, üç ýubkaly direg izolýatorlary, keramiki daýançlar we flanesli diwar geçiriji izolýatorlary.",
        facts: [
          { title: "Resminamalar", text: "Elektrik görkezijileri, ölçegleri we berkidilişi tassyklanan resminamalara laýyk." },
        ],
      },
      strain: {
        title: "Dartgy we transformator izolýatorlary",
        subtitle: "Farfor önümleriniň goşmaça toparlary",
        text: "Metal armaturaly ITG dartgy izolýatorlary we IPT transformator geçirijileri.",
        facts: [
          { title: "IPT topary", text: "IPT-1/250, IPT-1/400, IPT-1/630 we IPT-1/1000." },
          { title: "Sargyt üçin talaplar", text: "Elektrik režimi, berkidiş birikmeleri, mehaniki agram we daşky gurşaw." },
        ],
      },
      crossarms: {
        title: "Howa liniýalary üçin trawersler",
        subtitle: "Esasy toparlar we taslama görnüşleri",
        text: "Ýeke, jübüt, burç we ahyrky görnüşler — liniýanyň taslamasyna görä saýlanýar.",
        facts: [
          { title: "Esasy gurluşlar", text: "TH-8 we TM-1 trawersleri." },
          { title: "Sargyt üçin talaplar", text: "Direg bilen birikmesi, deşikler, agramlar, ölçegler we gorag örtügi." },
        ],
      },
      clamps: {
        title: "Hamutlar we şpilkalar",
        subtitle: "Berkidiji we birikdiriji bölekler",
        text: "U görnüşli we lentaly hamutlar, şpilkalar, plastinalar we kronşteýnler ylalaşylan çyzgylar boýunça.",
        facts: [
          { title: "Şpilkalar", text: "Uzynlygy, diametri, rezbasy we materialy ulanylyşyna görä bellenýär." },
          { title: "Gabat gelmegi", text: "Trawers, direg we birikme gurluşy bilen toplum hökmünde saýlanýar." },
        ],
      },
      transmission: {
        title: "Elektrik liniýa diregleri",
        subtitle: "Howa liniýalary üçin polat gurluşlar",
        text: "Howa elektrik geçiriji liniýalary üçin diregler we trawers gurluşlary.",
        facts: [
          { title: "Esasy synplar", text: "35, 110 we 220 kV gurluş toparlary." },
          { title: "Taslama maglumatlary", text: "Beýikligi, agramy, binýat bilen birikmesi we poslamadan gorag." },
        ],
      },
      observation: {
        title: "Gözegçilik diňleri",
        subtitle: "Belentlikdäki meýdançalar we çykyş gurluşlary",
        text: "Gözenekli direg, basgançaklar, gözegçilik kabinasy we töwerek meýdança.",
        facts: [
          { title: "Nusga", text: "18,5 m diň; beýleki gurluşlar taslama seljermesini talap edýär." },
        ],
      },
      accommodation: {
        title: "Wagon-öýler",
        subtitle: "Polozly wagon-öýler",
        text: "Uzakdaky senagat obýektleri üçin ýaşaýyş we iş jaýlary.",
        facts: [
          { title: "Ýerleşiş görnüşleri", text: "Ýaşaýyş, edara, naharhana, aşhana, duş ýa-da ussahana." },
          { title: "Taslama maglumatlary", text: "Adam sany, inženerçilik ulgamlary, daşamak şertleri we içki bezeg." },
        ],
      },
      castings: {
        title: "Latun we mis guýmalary",
        subtitle: "Guýma taýýarlamalar we taýýar bölekler",
        text: "Wtulkalar, çybyklar, şekilli taýýarlamalar we sargyt boýunça bölekler.",
        facts: [
          { title: "Materiallar", text: "Latunyň we misiň markalary çyzga we iş şertlerine görä saýlanýar." },
          { title: "Sargytlar", text: "Çyzgylar ýa-da nusgalar, gyşarmalar, mukdar we kabul ediş ölçegleri." },
        ],
      },
      parts: {
        title: "Talaplar boýunça bölekler",
        subtitle: "Dişli reýkalar, dartyjy çybyklar we sargytçynyň bölekleri",
        text: "Çyzgylar, nusgalar we funksional talaplar boýunça taýýarlanýan bölekler.",
        facts: [
          { title: "Ölçeg gözegçiligi", text: "Möhüm ölçegler we gyşarmalar tehniki resminamalarda görkezilýär." },
          { title: "Material we işlenişi", text: "Materialyň markasy, üstüniň ýagdaýy we bezegi sargyt üçin ylalaşylýar." },
        ],
      },
      breaker: {
        title: "Gidroçekiç gurallary",
        subtitle: "Uçly we pyçak uçly görnüşler",
        text: "Guýrugy we iş uçy gidroçekiçe laýyk saýlanýan pikler we pyçak gurallar.",
        facts: [
          { title: "Tehniki seljerme", text: "Polat markasy, termiki işläp bejermek we barlag talaplary ylalaşylýar." },
        ],
      },
    },
  },
  customers: {
    eyebrow: "Tejribe",
    title: "Sargytçylar we pudaklar",
    lead: "Saýlanan önümçilik we üpjünçilik gatnaşyklary.",
    items: [
      { name: "«Türkmennebit» döwlet konserni", text: "AGP nebit gyzdyryjylary we USN-175 nebit önümlerini guýujy enjamlar." },
      { name: "Türkmenistanyň Döwlet serhet gullugy", text: "Gözegçilik diňleri we olar bilen baglanyşykly polat gurluşlar." },
      { name: "Türkmenistanyň Energetika ministrligi", text: "Energetika önümleri, direg gurluşlary we elektrotehniki bölekler." },
    ],
  },
  quality: {
    eyebrow: "Hil",
    title: "Barlag we kabul ediş",
    lead: "Hereket edýän tehniki şertler (TŞ) we ylalaşylan resminamalar.",
    items: [
      { title: "Material we ölçeg barlaglary", text: "Materialyň kesgitlenişi, ölçegler, birikmeler we ýygnalyşy önüme degişlilikde barlanýar." },
      { title: "Önüm üçin kesgitlenen synaglar", text: "Zerur ýerlerde basyş, germetiklik, elektrik ýa-da funksional synaglar bellenýär." },
      { title: "Kabul ediş resminamalary", text: "Usullar, ölçegler we sertifikatlaşdyrma hereket edýän TŞ we ylalaşylan tehniki şertlere laýyk." },
    ],
  },
  order: {
    eyebrow: "Hyzmatdaşlyk",
    title: "Talapdan spesifikasiýa çenli",
    lead: "Her sargyt üçin düşnükli tehniki ýumuş.",
    steps: [
      { title: "Ulanylyşyny kesgitläň", text: "Gurşaw, öndürijilik, basyş, temperatura ýa-da elektrik režimi; ulanyş şertleri." },
      { title: "Gurluşyny ylalaşyň", text: "Ölçegler, materiallar, birikmeler, gorag örtügi, çyzgylar we goşmaça enjamlar." },
      { title: "Üpjünçilik göwrümini tassyklaň", text: "Mukdar, barlag, resminamalar, kabul ediş ölçegleri we eltip bermek talaplary." },
    ],
  },
  future: {
    eyebrow: "Täze ugurlar",
    title: "Geljekki önümleri ösdürmek",
    lead: "Häzirki önüm toplumyndan aýratyn. Täze önümler sargytçynyň anyk talaby bolanda, enjamlar, inženerçilik, synaglar we sertifikatlaşdyrma taýýar bolandan soň girizilýär.",
    badge: "Seredilýär",
    note: "Geljekde teklip edilýän önümçilik. Kuwwatlyklar, gurluş we önümçilik mümkinçiligi entek bahalandyrylýar.",
    items: {
      thermal: { title: "Ýylylyk enjamlary", subtitle: "Bug gazanlarynyň basyş bölekleri we ýylylyk çalşyjylar", text: "Bellenen tehnologik režimler üçin korpuslar, turba gözenekleri, turba desseleri we diregler." },
      autoclave: { title: "Awtoklawlaryň polat bölekleri", subtitle: "Basyşly korpuslar, ýapgyçlar we diregler", text: "Gabyklar, egrem düýpler, ýapgyç bölekleri, içki relsler we eýer görnüşli diregler." },
      mechanical: { title: "Mehaniki bölekler", subtitle: "Takyk bölekler we işlenen korpuslar", text: "Dişli tigirler, wallar, muftalar, podşipnik we reduktor korpuslary tassyklanan çyzgylar boýunça." },
      heavy: { title: "Agyr metal gurluşlar", subtitle: "Stanok esaslary, korpuslar we silindr gabyklar", text: "Kebşirlenen esaslar we binýatlar, maşyn korpuslary, flanesli we açyklykly togalanan gabyklar." },
      frames: { title: "Karkaslar we diregler", subtitle: "Typly esaslar, fermalar we eýer görnüşli diregler", text: "Nasoslar we kompressorlar üçin typly karkaslar, ferma ýygyndylary we daýanç metal gurluşlary." },
      mixer: { title: "Garyjy we baraban bölekleri", subtitle: "Kebşirlenen korpuslar we mehaniki bölekler", text: "Nowa görnüşli korpuslar, pilli wallar, baraban gabyklary, halkalar we daýanç karkaslary." },
      hoppers: { title: "Bunkerler we karkaslar", subtitle: "Bölümleýin saklaýyş göwreleri we daýanç gurluşlary", text: "Silindr bölümleri, konus bunkerler, sütünler, balkalar we baglaýjylar." },
      gas: { title: "Gaz arassalaýjy korpuslar", subtitle: "Süzgüç korpuslary, siklonlar we howa geçirijiler", text: "Halta süzgüçleriň korpuslary, siklon göwreleri, howa geçiriji bölümler, öwrümler we flaneslar." },
      workwear: { title: "Iş eşikleri", subtitle: "Tikinçilik sehi üçin teklip edilýän toplum", text: "Iş penjekleri we balaklar, kombinezonlar we halatlar — sargytçynyň ölçeglerinde we reňklerinde." },
    },
  },
  contacts: {
    eyebrow: "Habarlaşmak",
    title: "Kärhana bilen habarlaşmak",
    lead: "Ulanylyşyny, mukdaryny we çyzgylary iberiň — tehniki talaplara serederis.",
    addressLabel: "Salgy",
    address: ["2008-nji (N. Pomma) köçesi, 6", "Aşgabat 744000", "Türkmenistan"],
    phoneLabel: "Telefon",
    emailLabel: "Elektron poçta",
  },
  footer: {
    illustrations: "Önümleriň şekilleri berlen materiallar esasynda taýýarlanan görkezme suratlardyr, önümçilik çyzgylary däldir. Takyk gurluş tassyklanan resminamalar bilen kesgitlenýär.",
    rights: "«Nebitmaş» döwlet kärhanasy",
  },
};
