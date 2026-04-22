const siteConfig = {
  name: "Car Rental Budva",
  tagline: "The Adriatic Riviera at your own pace",
  domain: "carrentalbudva.com",
  phone: "",
  email: "info@carrentalbudva.com",
  address: "Tabacina BB, Kotor, 85330",

  hero: {
    headline: "Rent a Car in Budva",
    subheadline: "The Riviera base — beach towns, fortress walls, Venetian old towns and Sveti Stefan all inside a 30-minute drive.",
    image: "/img/hero-budva.webp",
  },

  cars: [
    { id: 1, slug: "vw-polo", name: "VW Polo", category: "Economy", price: 25, image: "/img/pexels-1035108.jpg", seats: 5, transmission: "Manual", fuel: "Petrol", doors: 4, luggage: 2, ac: true, features: ["Air Conditioning", "Bluetooth Audio", "USB Charging", "Central Locking"], popular: false },
    { id: 2, slug: "skoda-octavia", name: "Skoda Octavia", category: "Mid-Size", price: 35, image: "/img/pexels-116675.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 4, ac: true, features: ["Automatic Transmission", "Cruise Control", "Parking Sensors", "Large Boot"], popular: true },
    { id: 3, slug: "toyota-corolla", name: "Toyota Corolla", category: "Mid-Size", price: 38, image: "/img/pexels-170811.jpg", seats: 5, transmission: "Automatic", fuel: "Hybrid", doors: 4, luggage: 3, ac: true, features: ["Hybrid Engine", "Reversing Camera", "Apple CarPlay", "Keyless Start"], popular: false },
    { id: 4, slug: "mercedes-c-class", name: "Mercedes C-Class", category: "Premium", price: 65, image: "/img/pexels-120049.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 3, ac: true, features: ["Leather Seats", "Navigation System", "Premium Sound", "Heated Seats"], popular: true },
    { id: 5, slug: "fiat-500c", name: "Fiat 500C Cabriolet", category: "Convertible", price: 48, image: "/img/pexels-1007410.jpg", seats: 4, transmission: "Manual", fuel: "Petrol", doors: 2, luggage: 1, ac: true, features: ["Roof Down", "Easy Parking", "Bluetooth", "City-Friendly"], popular: true },
    { id: 6, slug: "bmw-x3", name: "BMW X3", category: "Premium SUV", price: 85, image: "/img/pexels-892522.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 4, ac: true, features: ["Panoramic Roof", "Adaptive Cruise", "360 Camera", "Sport Mode"], popular: false },
    { id: 7, slug: "jeep-renegade", name: "Jeep Renegade", category: "SUV", price: 55, image: "/img/pexels-1638459.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 3, ac: true, features: ["4x4 Drive", "Hill Descent Control", "Roof Rails", "Off-Road Mode"], popular: false },
    { id: 8, slug: "vw-transporter", name: "VW Transporter", category: "Van", price: 70, image: "/img/pexels-2533092.jpg", seats: 9, transmission: "Manual", fuel: "Diesel", doors: 4, luggage: 6, ac: true, features: ["9 Seats", "Airport Shuttle Ready", "Sliding Doors", "Ample Storage"], popular: false },
  ],

  features: [
    { icon: "map-pin", title: "Budva Town Pickup", description: "Meet us at Budva's Slovenska Plaza promenade, inside the Old Town walls, or at your Riviera hotel. Tivat Airport pickup available — 20 km and 30 minutes away." },
    { icon: "shield-check", title: "Riviera-Ready Insurance", description: "CDW, third-party liability and theft protection on every rental. Zero-excess upgrade available — useful on the tight Old Town lanes and the coastal road's blind corners." },
    { icon: "clock", title: "24/7 Beach-Town Support", description: "Late returns from Sveti Nikola, a puncture on the Paštrovići hairpins, a festival at Jaz — we pick up the phone at any hour." },
    { icon: "ban", title: "Transparent Prices", description: "No coast-season premium on the confirmation page. The rate you book is the rate you pay — taxes, airport fees and mileage already inside." },
    { icon: "refresh-cw", title: "Flexible Cancellation", description: "Weather turns, flights change, plans shift. Cancel most vehicles free up to seven days before pickup." },
    { icon: "globe", title: "Cross-Border Cover", description: "Croatia via Debeli Brijeg, Albania via Božaj, Bosnia through Sutorina — Green Card paperwork sorted at booking time." },
  ],

  testimonials: [
    { name: "Matteo & Giulia", location: "Bari, Italy", text: "Took the ferry from Bari to Bar, picked up a Polo in Budva the next morning. Did Sveti Stefan, Petrovac, and Ada Bojana over four days. The cabrio upgrade was worth every cent on the coastal road. Smooth return, no surprise charges.", rating: 5, avatar: "/img/avatar-1.webp" },
    { name: "Niamh O'Sullivan", location: "Cork, Ireland", text: "Flew Dublin-Tivat for a ten-day riviera trip. Based in Bečići. Drove the whole coast from Herceg Novi to Ulcinj over the week. A Fiat 500 was perfect — easy parking at every beach stop. Reliable car, honest pricing.", rating: 5, avatar: "/img/avatar-2.webp" },
    { name: "The Lindqvist Family", location: "Gothenburg, Sweden", text: "Needed a seven-seater for a family of six plus luggage. The Transporter was waiting at Tivat Airport in twenty minutes. Budva for a week, with day trips to Kotor and Sveti Stefan. Kids loved the cabrio afternoon we rented on the last day as a treat.", rating: 5, avatar: "/img/avatar-3.webp" },
  ],

  faq: [
    { q: "What do I bring to pick up the car?", a: "A valid driving licence, passport or ID, and a credit card in the lead driver's name. Non-Latin-script licences need an International Driving Permit alongside." },
    { q: "Can I drop off in Tivat or Kotor?", a: "Yes — one-way rentals to Tivat Airport (20 km) and Kotor (22 km) are standard. A small one-way fee applies." },
    { q: "How old do I need to be?", a: "21 years with at least two years of driving experience. Drivers 21-24 pay a young-driver surcharge that varies by car class." },
    { q: "Is beach parking included?", a: "Rental includes the car and the usual taxes, not parking. Budva has metered street zones and some paid beach car parks (€1-3/hour). We'll brief you on what to expect at pickup." },
    { q: "What about cross-border driving?", a: "Croatia, Albania, Bosnia, Serbia and Kosovo are all supported with Green Card insurance. Let us know at booking which countries you plan to cross." },
    { q: "Is the Sveti Stefan road open to my rental?", a: "Yes — the E65 Adriatic highway runs past Sveti Stefan viewpoints. No restriction on rental cars, free pull-offs above the island." },
    { q: "Summer-season price premium?", a: "No — the price we quote is the price you pay, year-round. July-August availability is tight though, so book early." },
    { q: "Is a deposit required?", a: "Most vehicles hold €100-€350 on a credit card. Some economy options are deposit-free — look for the 'no deposit' filter in the search results." },
    { q: "Is there a mileage limit?", a: "Most rentals are unlimited mileage. Budget economy vehicles sometimes cap at 200 km/day — visible before you confirm." },
    { q: "What about festivals on Jaz Beach?", a: "Sea Dance and similar summer festivals draw crowds. Book the car at least a week in advance if arriving for a festival, and expect full car parks near the beach." },
    { q: "Do you meet late flights at Tivat?", a: "Every arriving flight, no surcharge. Hand over the paperwork, the car's in the terminal lot, done in fifteen minutes." },
    { q: "Can I rent without a credit card?", a: "A few economy models accept debit with a larger deposit. Filter for 'no credit card required' at booking." },
  ],

  locations: [
    { name: "Budva", tag: "Most Popular" },
    { name: "Tivat Airport", tag: "Airport Pickup" },
    { name: "Bečići", tag: "" },
    { name: "Sveti Stefan", tag: "" },
    { name: "Petrovac", tag: "" },
    { name: "Rafailovići", tag: "" },
  ],

  destinations: [
    { name: "Budva Old Town", slug: "blog/budva-old-town-walls", tag: "Venetian walls", desc: "9th-century fortifications, the Citadel, and narrow stone lanes.", image: "/img/blog-budva-oldtown.webp" },
    { name: "Sveti Stefan", slug: "blog/sveti-stefan-photo-spots", tag: "10 min drive", desc: "The most-photographed island in the Adriatic.", image: "/img/blog-sveti-stefan.webp" },
    { name: "Bečići & Rafailovići", slug: "blog/becici-rafailovici-promenade", tag: "5 min drive", desc: "Two kilometres of soft sand and a seafront promenade.", image: "/img/blog-becici.webp" },
    { name: "Sveti Nikola (Hawaii)", slug: "blog/sveti-nikola-hawaii", tag: "15 min boat", desc: "Montenegro's largest island, with Hawaii-blue water.", image: "/img/blog-sveti-nikola.webp" },
    { name: "Jaz Beach", slug: "blog/jaz-beach-festivals", tag: "2.5 km west", desc: "The beach that hosted the Rolling Stones and Madonna.", image: "/img/blog-jaz.webp" },
    { name: "Paštrovići", slug: "blog/pastrovici-highlands-drive", tag: "Inland detour", desc: "Praskvica Monastery (1050) and Kosmač Fortress.", image: "/img/blog-pastrovici.webp" },
    { name: "Petrovac", slug: "blog/petrovac-quiet-alternative", tag: "20 min drive", desc: "The Riviera's laid-back alternative to Budva.", image: "/img/blog-petrovac.webp" },
    { name: "Tivat Airport", slug: "blog/tivat-airport-to-budva", tag: "Arrival Hub", desc: "20 km from Budva — the main summer gateway.", image: "/img/blog-tivat-arrival.webp" },
  ],
};

export default siteConfig;
