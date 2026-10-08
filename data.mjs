export const checkedDate = '8 October 2026';

export const routes = [
  {
    id: 'awaji', name: 'Awaji Island & Kobe', mood: 'Sea breezes & city lights',
    description: 'Cross the bridge for island views, then wind down with a Kobe dinner.',
    image: 'bridge', imageAlt: 'Akashi Kaikyo Bridge crossing the sea toward Awaji Island',
    firstDrive: '1.5–2 hours', firstDestination: 'northern Awaji',
    nights: ['Sumoto, Awaji Island', 'Central Kobe'],
    cities: ['Namba', 'Awaji Island', 'Kobe', 'Namba'],
    waypoints: ['Awaji Hanasajiki, Hyogo, Japan', 'Sumoto, Hyogo, Japan', 'Kobe, Hyogo, Japan'],
    tip: 'Book one night in Sumoto and one in Kobe. The bridge has tolls; allow extra time around weekends and holidays.',
    days: [
      { title: 'Take the scenic way out', location: 'Namba → Awaji Island', drive: 'About 2–3 hours of driving', sleep: 'Stay in Sumoto',
        stops: [
          { time: 'Morning', name: 'Leave Namba, cross the Akashi bridge', text: 'Collect the car and head to northern Awaji. An early start leaves room for unhurried stops.' },
          { time: 'Late morning', place: 'hanasajiki', text: 'Walk the hillside flower fields. What is in bloom depends on the season.' },
          { time: 'Lunch', place: 'miele', text: 'Pause on the west coast for burgers, grilled dishes, and sea views. Closed Tuesdays; check the calendar.' },
          { time: 'Afternoon', name: 'Settle into Sumoto', text: 'Drive to your first overnight base. Leave the evening free for the coast and dinner near your accommodation.' },
        ] },
      { title: 'An island morning, a city evening', location: 'Awaji Island → Kobe', drive: 'About 2–3 hours of driving', sleep: 'Stay in central Kobe',
        stops: [
          { time: 'Morning', name: 'A slow start in Sumoto', text: 'Have breakfast, check out, and work north across the island.' },
          { time: 'Midday', place: 'water-temple', text: 'Visit Tadao Ando’s Water Temple before heading back across the bridge.' },
          { time: 'Afternoon', place: 'harborland', text: 'Check into Kobe, park once, and explore the waterfront on foot.' },
          { time: 'Dinner', place: 'mouriya', text: 'Make a reservation for five. Private rooms accommodate 3–15 guests, subject to availability.' },
        ] },
      { title: 'A little movement before the ride home', location: 'Kobe → Namba', drive: 'About 1–1.5 hours of driving', sleep: 'Return to Namba',
        stops: [
          { time: 'Morning', place: 'gold-kobe', text: 'An optional workout: the visitor pass allows up to five hours. Bring ID and indoor shoes; confirm current rules.' },
          { time: 'Late morning', name: 'Coffee and a walk through Motomachi', text: 'Keep the last morning flexible, with time to browse and have lunch.' },
          { time: 'Afternoon', name: 'Drive back to Namba', text: 'Leave a buffer for traffic, refueling, and the rental car return.' },
        ] },
    ],
  },
  {
    id: 'kyoto', name: 'Kyoto & Lake Biwa', mood: 'Bamboo paths & lakeside pauses',
    description: 'Pair Kyoto’s familiar favorites with a slower day beside Japan’s largest lake.',
    image: 'kyoto', imageAlt: 'Sunlight through the tall bamboo of Arashiyama in Kyoto',
    firstDrive: '1.25–2 hours', firstDestination: 'Kyoto',
    nights: ['Kyoto', 'Otsu, Lake Biwa'],
    cities: ['Namba', 'Kyoto', 'Lake Biwa', 'Namba'],
    waypoints: ['Arashiyama, Kyoto, Japan', 'Kyoto, Japan', 'Otsu, Shiga, Japan'],
    tip: 'Choose accommodation with parking. In central Kyoto, park once and use walking or local transport between sights.',
    days: [
      { title: 'From the city to the bamboo', location: 'Namba → Kyoto', drive: 'About 1.5–2.5 hours of driving', sleep: 'Stay in Kyoto',
        stops: [
          { time: 'Morning', name: 'Drive from Namba to Kyoto', text: 'Pick up the car early. Park near Arashiyama before the busiest part of the day.' },
          { time: 'Late morning', place: 'arashiyama', text: 'Walk through the bamboo grove and allow time for the riverside.' },
          { time: 'Afternoon', place: 'nishiki', text: 'Browse the food shops. Eat at the stall or designated area, rather than while walking.' },
          { time: 'Evening', name: 'Check in and explore on foot', text: 'Keep the car parked for dinner. Reserve a table together if you want a sit-down meal.' },
        ] },
      { title: 'Shrine paths, then open water', location: 'Kyoto → Lake Biwa', drive: 'About 1–1.5 hours of driving', sleep: 'Stay in Otsu',
        stops: [
          { time: 'Early morning', place: 'fushimi', text: 'Explore the torii paths before the busiest hours. Choose a shorter walk or allow longer for the hill.' },
          { time: 'Late morning', place: 'gold-kyoto', text: 'Optional visitor workout. Bring a passport or residence card, your Japan address, and indoor shoes.' },
          { time: 'Afternoon', place: 'biwa', text: 'Drive to Otsu and enjoy the southern lakeshore. This plan keeps to the south, rather than circling the whole lake.' },
          { time: 'Dinner', place: 'matsukiya', text: 'Reserve for five at the Otsu restaurant if an Omi beef meal is on your list.' },
        ] },
      { title: 'Leave a little room to linger', location: 'Lake Biwa → Namba', drive: 'About 1.5–2 hours of driving', sleep: 'Return to Namba',
        stops: [
          { time: 'Morning', name: 'Breakfast by the lake', text: 'Take a final lakeside walk and check out without rushing.' },
          { time: 'Midday', name: 'Start the return drive', text: 'Leave time for a service-area lunch and a break along the way.' },
          { time: 'Afternoon', name: 'Back in Namba', text: 'Refuel and return the car before the rental deadline.' },
        ] },
    ],
  },
  {
    id: 'wakayama', name: 'Wakayama & Shirahama', mood: 'White sand & fresh seafood',
    description: 'Follow the Kii coast to wide beaches, seaside rock shelves, and seafood markets.',
    image: 'shirahama', imageAlt: 'The white sands and turquoise water of Shirarahama in Wakayama',
    firstDrive: '1.25–1.75 hours', firstDestination: 'Wakayama city',
    nights: ['Wakayama city', 'Shirahama'],
    cities: ['Namba', 'Wakayama', 'Shirahama', 'Namba'],
    waypoints: ['Wakayama Marina City, Japan', 'Wakayama, Japan', 'Shirahama, Wakayama, Japan'],
    tip: 'This is the longest return drive. Reserve parking with both stays and keep the last afternoon free for the journey home.',
    days: [
      { title: 'Follow the coast south', location: 'Namba → Wakayama', drive: 'About 1.5–2.5 hours of driving', sleep: 'Stay in Wakayama city',
        stops: [
          { time: 'Morning', name: 'Leave Namba for Wakayama', text: 'Collect the car and head south. Keep time for a break and the Marina City detour.' },
          { time: 'Lunch', place: 'kuroshio', text: 'Pick from seafood bowls, sushi, or the market’s other dining options.' },
          { time: 'Afternoon', name: 'Check in to Wakayama', text: 'Settle into your first overnight base and explore the city at your own pace.' },
          { time: 'Optional', place: 'anytime-wakayama', text: 'An option for eligible Anytime members. Non-member trial access varies by club; contact this branch before relying on it.' },
        ] },
      { title: 'A day with salt in the air', location: 'Wakayama → Shirahama', drive: 'About 1.5–2.5 hours of driving', sleep: 'Stay in Shirahama',
        stops: [
          { time: 'Morning', name: 'Drive down to Shirahama', text: 'Enjoy a relaxed start, then continue south with a stop if needed.' },
          { time: 'Lunch', place: 'toretore', text: 'Browse the market and choose a seafood lunch. Seating together is not guaranteed at busy times.' },
          { time: 'Afternoon', place: 'shirarahama', text: 'Walk the white-sand beach. Swimming depends on the season and conditions.' },
          { time: 'Late afternoon', place: 'senjojiki', text: 'Explore the broad coastal rock shelves in daylight, weather permitting.' },
        ] },
      { title: 'One last look at the Pacific', location: 'Shirahama → Namba', drive: 'About 2.5–3.5 hours of driving', sleep: 'Return to Namba',
        stops: [
          { time: 'Morning', name: 'Breakfast and a final coastal walk', text: 'Check out with time for a short walk or coffee near your stay.' },
          { time: 'Late morning', name: 'Begin the return to Osaka', text: 'Plan a rest stop; this is the longest driving leg of the trip.' },
          { time: 'Afternoon', name: 'Return the car in Namba', text: 'Allow extra time for traffic and refueling before the rental deadline.' },
        ] },
    ],
  },
];

export const places = [
  { id: 'hanasajiki', route: 'awaji', category: 'sights', name: 'Awaji Hanasajiki', area: 'Northern Awaji', image: 'flowers', imageAlt: 'Flower fields at Awaji Hanasajiki', imageLabel: 'Awaji Hanasajiki', description: 'Seasonal flower fields on a hillside looking toward the sea. An easy first stop after the bridge.', note: 'Blooms change with the season. Check the park’s current information and parking fees.', source: 'https://awajihanasajiki.jp/', mapQuery: 'Awaji Hanasajiki, Hyogo, Japan' },
  { id: 'miele', route: 'awaji', category: 'food', name: 'miele the DINER', area: 'Awaji west coast', image: 'bridge', imageAlt: 'The sea and bridge at Awaji Island', imageLabel: 'Awaji destination view', description: 'An American-style diner and café with sea views, grilled dishes, burgers, and sweets.', note: 'Closed Tuesdays. Ask about seating for five; parking is listed on the official site.', source: 'https://miele-the-diner.com/', mapQuery: 'miele the DINER, Awaji, Japan' },
  { id: 'gold-kobe', route: 'awaji', category: 'gyms', name: 'Gold’s Gym Kobe Motomachi', area: 'Central Kobe', image: 'gym', imageAlt: 'A row of dumbbells, a fitness inspiration photograph', imageLabel: 'Fitness inspiration', description: 'Fit an optional strength or cardio session into your Kobe morning, close to Motomachi.', note: 'Visitor: ¥2,860 for up to 5 hours. ID required; confirm indoor shoe and entry rules.', source: 'https://www.goldsgym.jp/shop/kobe-motomachi/membership/', mapQuery: 'Golds Gym Kobe Motomachi, Japan' },
  { id: 'water-temple', route: 'awaji', category: 'sights', name: 'Honpukuji Water Temple', area: 'Northern Awaji', description: 'Tadao Ando’s concrete temple has a reflecting pond above its main hall. A quiet architecture stop.', note: 'Allow time for the visit and check current admission details.', source: 'https://www.japan.travel/en/spot/491/', mapQuery: 'Honpukuji Water Temple, Awaji, Japan' },
  { id: 'mouriya', route: 'awaji', category: 'food', name: 'Royal Mouriya', area: 'Sannomiya, Kobe', description: 'A Kobe steak restaurant for a special dinner together, with teppanyaki and private rooms.', note: 'Private rooms seat 3–15. Reserve for five and check the dress code and current menu.', source: 'https://www.mouriya.co.jp/royal', mapQuery: 'Royal Mouriya, Kobe, Japan' },
  { id: 'harborland', route: 'awaji', category: 'sights', name: 'Kobe Harborland', area: 'Kobe waterfront', description: 'A waterfront district for a relaxed stroll, shopping, and a look across the harbor.', note: 'Park once and explore on foot. Individual shops and attractions have their own hours.', source: 'https://harborland.co.jp/', mapQuery: 'Kobe Harborland, Japan' },
  { id: 'arashiyama', route: 'kyoto', category: 'sights', name: 'Arashiyama Bamboo Grove', area: 'Western Kyoto', image: 'kyoto', imageAlt: 'The bamboo paths in Arashiyama, Kyoto', imageLabel: 'Arashiyama', description: 'Walk the famous bamboo paths, then leave time for the river and nearby streets.', note: 'Popular and often crowded. An early visit makes the walk more relaxed.', source: 'https://www.japan.travel/en/spot/1141/', mapQuery: 'Arashiyama Bamboo Grove, Kyoto, Japan' },
  { id: 'nishiki', route: 'kyoto', category: 'food', name: 'Nishiki Market', area: 'Central Kyoto', description: 'Browse Kyoto’s food market for local ingredients and small bites, with plenty of choices for the group.', note: 'Eat at the shop or designated area. Shop hours vary, and this is not one sit-down restaurant.', source: 'https://www.kyoto-nishiki.or.jp/en/', mapQuery: 'Nishiki Market, Kyoto, Japan' },
  { id: 'gold-kyoto', route: 'kyoto', category: 'gyms', name: 'Gold’s Gym Kyoto Nijo', area: 'Nijo, Kyoto', image: 'gym', imageAlt: 'Dumbbells shown as fitness inspiration', imageLabel: 'Fitness inspiration', description: 'A visitor-friendly workout option near Nijo, with machines and free weights.', note: 'Visitor: ¥2,860, up to 5 hours. Bring passport or residence card, a Japan address, and indoor shoes.', source: 'https://www.goldsgym.jp/shop/kyoto-nijo/news/5949/', mapQuery: 'Golds Gym Kyoto Nijo, Japan' },
  { id: 'fushimi', route: 'kyoto', category: 'sights', name: 'Fushimi Inari Taisha', area: 'Southern Kyoto', description: 'Explore the shrine’s torii-lined paths. Choose a short visit or make time to walk farther uphill.', note: 'Start early and choose a walking distance that suits everyone.', source: 'https://inari.jp/en/', mapQuery: 'Fushimi Inari Taisha, Kyoto, Japan' },
  { id: 'biwa', route: 'kyoto', category: 'sights', name: 'Lake Biwa’s southern shore', area: 'Otsu, Shiga', description: 'Trade city streets for a lakeside walk beside Japan’s largest freshwater lake.', note: 'Use Otsu as the overnight base. A full circuit of the lake is beyond this relaxed itinerary.', source: 'https://www.japan.travel/en/spot/1052/', mapQuery: 'Otsu Lakeside Nagisa Park, Shiga, Japan' },
  { id: 'matsukiya', route: 'kyoto', category: 'food', name: 'Matsukiya Honten', area: 'Otsu, Shiga', description: 'An Omi beef restaurant offering steak, sukiyaki, and shabu-shabu in Otsu.', note: 'Reserve a table for five and check the menu and any advance notice for your chosen plan.', source: 'https://www.matsukiya.net/plan_honten', mapQuery: 'Matsukiya Honten, Otsu, Japan' },
  { id: 'shirarahama', route: 'wakayama', category: 'sights', name: 'Shirarahama Beach', area: 'Shirahama, Wakayama', image: 'shirahama', imageAlt: 'White sand and ocean at Shirarahama in Wakayama', imageLabel: 'Shirarahama', description: 'A bright stretch of white sand for an easy seaside walk and a pause by the Pacific.', note: 'Swimming is seasonal and weather dependent. Check beach and parking information.', source: 'https://www.nankishirahama.jp/spot/527/', mapQuery: 'Shirarahama Beach, Wakayama, Japan' },
  { id: 'toretore', route: 'wakayama', category: 'food', name: 'Toretore Market', area: 'Shirahama, Wakayama', image: 'food', imageAlt: 'Sashimi platter shown as seafood inspiration', imageLabel: 'Seafood inspiration', description: 'A fish market with seafood meals, sushi, and other food options for a relaxed lunch stop.', note: 'A useful place for different tastes. Seating together for five is not guaranteed.', source: 'https://toretore.com/ichiba/', mapQuery: 'Toretore Market, Shirahama, Wakayama, Japan' },
  { id: 'anytime-wakayama', route: 'wakayama', category: 'gyms', name: 'Anytime Fitness Wakayama Inter', area: 'Wakayama city', image: 'gym', imageAlt: 'Gym dumbbells shown as fitness inspiration', imageLabel: 'Fitness inspiration', description: 'A branch with parking for an optional workout during your Wakayama stay.', note: 'Eligible members can use club access. Non-member trials vary by branch; ask before visiting.', source: 'https://www.anytimefitness.co.jp/wakayamainter/', accessSource: 'https://www.anytimefitness.co.jp/faq/a15/', mapQuery: 'Anytime Fitness Wakayama Inter, Japan' },
  { id: 'senjojiki', route: 'wakayama', category: 'sights', name: 'Senjojiki', area: 'Shirahama, Wakayama', description: 'Broad rock shelves beside the Pacific make a memorable coastal walk in daylight.', note: 'Weather and footing matter. Give the shoreline plenty of space when seas are rough.', source: 'https://www.nankishirahama.jp/spot/531/', mapQuery: 'Senjojiki, Shirahama, Wakayama, Japan' },
  { id: 'kuroshio', route: 'wakayama', category: 'food', name: 'Kuroshio Market', area: 'Wakayama Marina City', description: 'A seafood stop with sushi, seafood bowls, barbecue, and restaurant choices.', note: 'Check the current dining options and hours. Parking and meal costs are separate.', source: 'https://www.kuroshioichiba.co.jp/corner3/', mapQuery: 'Kuroshio Market, Wakayama Marina City, Japan' },
  { id: 'gold-osaka', route: 'shared', category: 'gyms', name: 'Gold’s Gym Shinsaibashi', area: 'Near Namba · Osaka', description: 'A departure-area gym option if you want to train before leaving Osaka or after returning.', note: 'Visitor: ¥2,860 for up to 5 hours. ID required; confirm current rules and indoor footwear.', source: 'https://www.goldsgym.jp/shop/shinsaibashi-osaka/membership/', mapQuery: 'Golds Gym Shinsaibashi Osaka, Japan' },
];

export function placesForRoute(routeId) {
  return places.filter(place => place.route === routeId || place.route === 'shared');
}

export function mapSearch(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function drivingLoop(route) {
  const params = new URLSearchParams({ api: '1', origin: 'Namba, Osaka, Japan', destination: 'Namba, Osaka, Japan', travelmode: 'driving', waypoints: route.waypoints.join('|') });
  return `https://www.google.com/maps/dir/?${params}`;
}
