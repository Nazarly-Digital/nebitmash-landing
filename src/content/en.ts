import type { Dict } from "./types";

// Источник — английский каталог предприятия (NEBITMAS_Catalogue_EN, 2026).
// Факты (модели, заказчики, классы напряжения, 18,5 м) не выдумывать:
// любое число здесь покупатель вправе потребовать в договоре.
export const en: Dict = {
  meta: {
    title: "Nebitmaş — industrial manufacturing in Turkmenistan",
    description:
      "State-Owned Enterprise “Nebitmaş”: oilfield equipment, tanks and boilers, electrical products, overhead-line structures and custom parts. Manufacturing since 1960.",
  },
  nav: {
    products: "Products",
    customers: "Customers",
    quality: "Quality",
    order: "How to order",
    future: "New directions",
    contacts: "Contacts",
    call: "Call",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    ministry: "Ministry of Industry and Construction Manufacturing of Turkmenistan",
    enterprise: "State-Owned Enterprise",
    title: "Manufacturing for industry",
    lead: "Oilfield equipment, tanks and heating products, electrical components and fabricated steel structures — made in Ashgabat since 1960 and configured to your specification.",
    ctaProducts: "View products",
    ctaCall: "Call the enterprise",
    buildingAlt: "Nebitmaş administrative building",
  },
  president: {
    role: "President of Turkmenistan",
    name: "Serdar Berdimuhamedov",
  },
  stats: [
    { value: "1960", label: "manufacturing since" },
    { value: "5", label: "product directions" },
    { value: "35–220 kV", label: "transmission structure classes" },
    { value: "3", label: "state customers" },
  ],
  products: {
    eyebrow: "Portfolio",
    title: "Products and applications",
    lead: "Every model below is a reference. Dimensions, materials and configuration are agreed for your duty and documentation.",
    modelsLabel: "Models",
    madeFor: "Made for",
    groups: {
      oilgas: "Oil & gas equipment",
      thermal: "Tanks & thermal equipment",
      electrical: "Electrical products",
      energy: "Energy structures & hardware",
      custom: "Site units & custom parts",
    },
    items: {
      agp: {
        title: "Oil flow heaters",
        subtitle: "AGP series",
        text: "Heating oil streams for oilfield and petroleum-processing duties.",
        facts: [
          { title: "Project definition", text: "Heating duty, process conditions, fuel and connections." },
          { title: "Range", text: "AGP-0.6 and AGP-1.0 are reference models; other configurations can be reviewed." },
        ],
      },
      usn: {
        title: "Petroleum transfer",
        subtitle: "USN-175 loading and unloading equipment",
        text: "Transfer of petroleum products between storage and transport systems.",
        facts: [
          { title: "Construction", text: "Transfer-arm and coupling arrangement." },
          { title: "Project definition", text: "Reach, medium, connection layout and operating conditions." },
        ],
      },
      tanks: {
        title: "Steel tanks",
        subtitle: "Cylindrical and rectangular configurations",
        text: "Storage and process duties defined by the customer.",
        facts: [
          { title: "Fabrication", text: "Welded shells, tank bodies, supports and specified access features." },
          { title: "Options", text: "Capacity, orientation, nozzles, supports and protective finish." },
        ],
      },
      boilers: {
        title: "Hot-water boilers",
        subtitle: "KO series",
        text: "Hot-water heating for industrial sites and buildings.",
        facts: [
          { title: "Product family", text: "KO-0.2, KO-0.5, KO-1.0 and KO-2.0 are reference examples." },
          { title: "Selection", text: "Duty, fuel, water conditions and final construction follow the agreed specification." },
        ],
      },
      cabinets: {
        title: "Distribution cabinets",
        subtitle: "Enclosures for distribution and lighting installations",
        text: "Steel cabinets with agreed mounting and cable-entry arrangements.",
        facts: [
          { title: "Configuration", text: "Dimensions, doors, internal layout and protective finish follow the order." },
          { title: "Scope", text: "Internal equipment is defined in the supply specification." },
        ],
      },
      switching: {
        title: "Switching and protection",
        subtitle: "Knife switches, fuses and electrical contacts",
        text: "Knife switches, disconnect switches, fuses and current-carrying connection parts.",
        facts: [
          { title: "Switching", text: "Knife switches and RPS-family disconnect-switch configurations." },
          { title: "Protection", text: "PN-2 and PK fuse families; transformer contacts." },
        ],
      },
      porcelain: {
        title: "Porcelain insulators",
        subtitle: "Pin, post, support and bushing configurations",
        text: "Pin insulator SHF-20, three-shed post insulators, ceramic supports and flanged wall bushings.",
        facts: [
          { title: "Documentation", text: "Electrical ratings, dimensions and mounting follow approved documentation." },
        ],
      },
      strain: {
        title: "Strain and transformer insulators",
        subtitle: "Additional porcelain product families",
        text: "ITG strain insulators with metal fittings and IPT transformer bushings.",
        facts: [
          { title: "IPT family", text: "IPT-1/250, IPT-1/400, IPT-1/630 and IPT-1/1000." },
          { title: "Order requirements", text: "Electrical duty, mounting interfaces, mechanical loading and environment." },
        ],
      },
      crossarms: {
        title: "Overhead-line crossarms",
        subtitle: "Reference families and project configurations",
        text: "Single, paired, corner and terminal arrangements, selected to the line design.",
        facts: [
          { title: "Reference designs", text: "TH-8 and TM-1 crossarms." },
          { title: "Order requirements", text: "Pole interface, mounting holes, loads, dimensions and protective finish." },
        ],
      },
      clamps: {
        title: "Clamps and threaded studs",
        subtitle: "Mounting and connection components",
        text: "U-shaped and band clamps, threaded studs, plates and brackets to agreed drawings.",
        facts: [
          { title: "Threaded studs", text: "Lengths, diameters, thread sizes and materials specified for the application." },
          { title: "Compatibility", text: "Selected as a set with the crossarm, support and connection design." },
        ],
      },
      transmission: {
        title: "Transmission supports",
        subtitle: "Fabricated steel structures for overhead lines",
        text: "Supports and crossarm structures for overhead transmission lines.",
        facts: [
          { title: "Reference classes", text: "35, 110 and 220 kV structure families." },
          { title: "Project definition", text: "Height, loading, foundation interfaces and corrosion protection." },
        ],
      },
      observation: {
        title: "Observation towers",
        subtitle: "Elevated platforms and access structures",
        text: "Lattice support, access stairs, observation cabin and perimeter platform.",
        facts: [
          { title: "Reference", text: "18.5 m tower; other designs require project review." },
        ],
      },
      accommodation: {
        title: "Accommodation units",
        subtitle: "Skid-mounted wagon-houses",
        text: "Living and working spaces for remote industrial sites.",
        facts: [
          { title: "Layouts", text: "Accommodation, office, dining, kitchen, shower or workshop." },
          { title: "Project definition", text: "Occupancy, utilities, transport conditions and interior fit-out." },
        ],
      },
      castings: {
        title: "Brass and copper castings",
        subtitle: "Casting blanks and finished components",
        text: "Sleeves, rods, shaped blanks and custom components.",
        facts: [
          { title: "Materials", text: "Brass and copper grades selected against the drawing and service duty." },
          { title: "Orders", text: "Drawings or samples, tolerances, quantities and acceptance criteria." },
        ],
      },
      parts: {
        title: "Parts to specification",
        subtitle: "Gear racks, tensioning rods and customer-specific components",
        text: "Parts made against drawings, reference samples and functional requirements.",
        facts: [
          { title: "Dimensional control", text: "Critical dimensions and tolerances identified in the technical documentation." },
          { title: "Material & finish", text: "Material grade, surface condition and finishing agreed for the order." },
        ],
      },
      breaker: {
        title: "Hydraulic breaker tools",
        subtitle: "Pointed and chisel-ended configurations",
        text: "Moil-point and chisel tools with shank and working end matched to the breaker.",
        facts: [
          { title: "Technical review", text: "Steel grade, heat treatment and inspection requirements are agreed." },
        ],
      },
    },
  },
  customers: {
    eyebrow: "References",
    title: "Customers and sectors",
    lead: "Selected manufacturing and supply relationships.",
    items: [
      { name: "State Concern “Türkmennebit”", text: "AGP oil flow heaters and USN-175 petroleum-transfer devices." },
      { name: "State Border Service of Turkmenistan", text: "Observation towers and associated steel structures." },
      { name: "Ministry of Energy of Turkmenistan", text: "Energy products, support structures and electrical components." },
    ],
  },
  quality: {
    eyebrow: "Quality",
    title: "Inspection and acceptance",
    lead: "Applicable technical specifications (TDS) and agreed documentation.",
    items: [
      { title: "Material and dimensional checks", text: "Material identification, dimensions, joints and assembly are checked as applicable to the product." },
      { title: "Tests defined for the product", text: "Pressure, leak, electrical or functional tests are specified where relevant." },
      { title: "Acceptance documentation", text: "Methods, criteria and certification follow the applicable TDS and agreed technical specification." },
    ],
  },
  order: {
    eyebrow: "Working together",
    title: "From requirement to specification",
    lead: "A clear brief for every order.",
    steps: [
      { title: "Define the application", text: "Medium, capacity, pressure, temperature or electrical duty; intended operating environment." },
      { title: "Agree the construction", text: "Dimensions, materials, connection interfaces, protective finish, drawings and accessories." },
      { title: "Confirm the delivery scope", text: "Quantities, inspection, documentation, acceptance criteria and delivery requirements." },
    ],
  },
  future: {
    eyebrow: "New directions",
    title: "Future product development",
    lead: "Separate from the current portfolio. New products are introduced where there is a defined customer requirement, after equipment, engineering, testing and certification are in place.",
    badge: "Under consideration",
    note: "Proposed future manufacturing. Capacity, design and production feasibility remain subject to assessment.",
    items: {
      thermal: { title: "Thermal fabrication", subtitle: "Steam-boiler pressure parts and heat exchangers", text: "Shells, tube sheets, tube bundles and supports for defined process duties." },
      autoclave: { title: "Autoclave steel parts", subtitle: "Pressure shells, closures and supports", text: "Shells, dished ends, closure parts, internal rails and saddle supports." },
      mechanical: { title: "Mechanical components", subtitle: "Precision parts and machined housings", text: "Gears, shafts, couplings, bearing housings and gearbox casings to approved drawings." },
      heavy: { title: "Heavy fabrication", subtitle: "Machine beds, housings and cylindrical shells", text: "Welded beds and bases, machine housings, rolled shells with flanges and openings." },
      frames: { title: "Frames and supports", subtitle: "Skid bases, trusses and saddle supports", text: "Skid frames for pumps and compressors, trussed assemblies and supporting steelwork." },
      mixer: { title: "Mixer and drum parts", subtitle: "Fabricated bodies and mechanical components", text: "Trough housings, paddle shafts, drum shells, rings and support frames." },
      hoppers: { title: "Hoppers and frames", subtitle: "Sectional storage bodies and support structures", text: "Cylindrical sections, conical hoppers, columns, beams and bracing." },
      gas: { title: "Gas-cleaning housings", subtitle: "Filter casings, cyclones and ductwork", text: "Bag-filter casings, cyclone bodies, duct sections, bends and flanges." },
      workwear: { title: "Factory workwear", subtitle: "A proposed range for the sewing workshop", text: "Work jackets and trousers, coveralls and workshop coats in customer sizes and colours." },
    },
  },
  contacts: {
    eyebrow: "Contacts",
    title: "Contact the enterprise",
    lead: "Tell us the application, quantities and drawings — we will review the technical requirements.",
    addressLabel: "Address",
    address: ["6, 2008 (N. Pomma) Street", "Ashgabat 744000", "Turkmenistan"],
    phoneLabel: "Telephone",
    faxLabel: "Fax",
  },
  footer: {
    illustrations: "Product visuals are illustrative configurations based on supplied materials, not manufacturing drawings. Exact construction is governed by approved documentation.",
    rights: "State-Owned Enterprise “Nebitmaş”",
  },
};
