// Add all currently-hardcoded English strings from App.jsx into en.json as
// proper translation keys. Downstream we batch-translate to 5 locales and
// rewire App.jsx to use t().

import fs from "node:fs";

const PATH = "src/i18n/locales/en.json";
const j = JSON.parse(fs.readFileSync(PATH, "utf8"));

// Deep-merge helper — only writes fields that don't already exist, so this is
// safe to re-run and won't clobber hand-edits.
function mergeMissing(target, source) {
  for (const [k, v] of Object.entries(source)) {
    if (target[k] === undefined) target[k] = v;
    else if (typeof v === "object" && v !== null && typeof target[k] === "object") {
      mergeMissing(target[k], v);
    }
  }
}

const additions = {
  hero: {
    headlineMain: "Kotor Car Rental.",
    headlineSub: "Rent Local for Less.",
  },
  fleet: {
    browseByCategory: "Browse by category",
    ourFleet: "Our Fleet",
    tabCities: "Cities",
    tabAirports: "Airports",
    tabScenic: "Scenic",
  },
  popularRoutes: {
    label: "Popular Routes",
    title: "Scenic Drives from Kotor",
    subtitle: "Four roads worth renting a car for.",
    items: {
      "0": { title: "Kotor to Perast", desc: "Bay road hugging the waterline, stop at every layby for photos of the fjord.", time: "15 min", distance: "12 km" },
      "1": { title: "Kotor to Budva", desc: "Through the mountain tunnel, past Sveti Stefan viewpoint, onto the riviera.", time: "30 min", distance: "22 km" },
      "2": { title: "Kotor to Lovćen", desc: "25 hairpin bends climbing 1,000 metres to the Njegos Mausoleum at the summit.", time: "45 min", distance: "30 km" },
      "3": { title: "Kotor to Dubrovnik", desc: "Coastal E65 through Herceg Novi, one border crossing, Green Card in the glovebox.", time: "2 hrs", distance: "92 km" },
    },
  },
  howItWorks: {
    // Existing keys are kept; add any missing ones that we reference from JSX:
    stepsTitle1: "Search & Compare",
    stepsDesc1: "Pick your dates and location. Browse real-time prices from local providers across Montenegro.",
    stepsTitle2: "Book Instantly",
    stepsDesc2: "Reserve online in minutes. Free cancellation on most vehicles. No credit card tricks.",
    stepsTitle3: "Collect & Drive",
    stepsDesc3: "Your car waits at Tivat Airport or Kotor Old Town. Keys in hand, bay road ahead.",
  },
  statsLabels: {
    vehiclesAvailable: "Vehicles Available",
    pickupLocations: "Pickup Locations",
    customerRating: "Customer Rating",
    countriesPermitted: "Countries Permitted",
  },
  insiderTips: {
    label: "Insider Tips",
    title: "Three Things Every Driver Should Know",
    items: {
      "0": { tag: "Booking", title: "Book 2-3 Weeks Ahead", text: "Prices jump 40% in the final week before summer pickup. Lock in your rate early, free cancellation means no risk." },
      "1": { tag: "Driving", title: "Fill Up Before the Mountains", text: "The last petrol station before Lovćen is in Kotor. The serpentine has 25 hairpins and zero fuel stops. Top up at the Tabacina station." },
      "2": { tag: "Borders", title: "Green Card = No Stress at Debeli Brijeg", text: "The Croatia crossing takes 5 minutes with paperwork ready. Without it, you turn around. We prepare the Green Card at booking, always check it's in the glovebox." },
    },
  },
  experiences: {
    label: "Experiences",
    title: "Things to Do with a Rental Car",
    subtitle: "Every destination is a drive away, no tour bus, no schedule, just you and the road.",
    readGuide: "Read guide",
    items: {
      "0": { title: "Boat Trip to Our Lady of the Rocks", location: "Perast, 15 min drive" },
      "1": { title: "Drive the Lovćen Serpentine", location: "Lovćen, 45 min drive" },
      "2": { title: "Beach Day on the Budva Riviera", location: "Budva, 30 min drive" },
      "3": { title: "Cross-Border Day Trip to Dubrovnik", location: "Croatia, 2 hr drive" },
    },
  },
  roadTripPlanner: {
    label: "Road Trip Planner",
    title: "Planning a Bay of Kotor Road Trip?",
    browseAll: "Browse all guides",
    lovcenGuide: "Lovćen drive guide",
  },
  compare: {
    label: "Why Rent?",
    title: "Taxi vs Rental Car",
    withoutTitle: "Without a Car",
    withoutItems: [
      "Airport taxi to Kotor: €25 one way",
      "Day trip to Budva by taxi: €40 return",
      "Perast boat trip taxi: €20 return",
      "Stuck to bus schedules",
      "Can't reach hidden beaches",
    ],
    withoutTotal: "~€85+/day in taxis",
    withTitle: "With a Rental Car",
    withItems: [
      "Airport pickup: included",
      "Unlimited destinations: your pace",
      "Full insurance: included",
      "Cross-border to Croatia: permitted",
      "Every beach, viewpoint, village",
    ],
    withTotal: "From €13/day",
  },
  driveMap: {
    label: "Drive Times",
    title: "Everything is Close from Kotor",
    subtitle: "One car, six directions, zero tour-bus schedules.",
    hub: "KOTOR",
    items: {
      "0": { name: "Tivat Airport", time: "15 min" },
      "1": { name: "Budva", time: "30 min" },
      "2": { name: "Herceg Novi", time: "40 min" },
      "3": { name: "Podgorica", time: "90 min" },
      "4": { name: "Dubrovnik", time: "2 hrs" },
    },
  },
  ctaBrand: {
    brand: "Kotor Car Rental",
    searchCars: "Search Cars",
  },
};

mergeMissing(j, additions);

fs.writeFileSync(PATH, JSON.stringify(j, null, 2) + "\n", "utf8");
console.log("en.json patched with missing keys.");
