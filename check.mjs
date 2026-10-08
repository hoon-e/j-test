import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { routes, places, placesForRoute, mapSearch, drivingLoop } from './data.mjs';

execFileSync(process.execPath, ['--check', 'app.mjs']);
assert.equal(routes.length, 3);
assert.equal(new Set(places.map(place => place.id)).size, places.length, 'Place IDs must be unique');
const byId = new Map(places.map(place => [place.id, place]));
for (const route of routes) {
  assert.equal(route.days.length, 3, `${route.id} needs three days`);
  assert.equal(route.nights.length, 2, `${route.id} needs two overnight bases`);
  const available = placesForRoute(route.id);
  for (const category of ['sights', 'food', 'gyms']) {
    assert(available.some(place => place.category === category), `${route.id} lacks ${category}`);
  }
  for (const day of route.days) {
    assert(day.stops.length > 0);
    for (const stop of day.stops) {
      if (stop.place) {
        assert(byId.has(stop.place), `Unknown itinerary stop: ${stop.place}`);
        assert(available.includes(byId.get(stop.place)), `Stop belongs to another route: ${stop.place}`);
      } else assert(stop.name && stop.text);
    }
  }
  const loop = new URL(drivingLoop(route));
  assert.equal(loop.searchParams.get('origin'), loop.searchParams.get('destination'));
  assert.equal(loop.searchParams.get('travelmode'), 'driving');
  assert.equal(loop.searchParams.get('waypoints').split('|').length, route.waypoints.length);
  assert(existsSync(`assets/${route.image}.webp`));
}
for (const place of places) {
  assert(place.route === 'shared' || routes.some(route => route.id === place.route));
  assert.equal(new URL(place.source).protocol, 'https:');
  assert(place.mapQuery && place.description && place.note);
  if (place.image) {
    assert(existsSync(`assets/${place.image}.webp`));
    assert(place.imageAlt && place.imageLabel);
  }
}
assert.equal(new URL(mapSearch('Namba & Osaka / 日本')).searchParams.get('query'), 'Namba & Osaka / 日本');
for (const filename of ['index.html', 'credits.html']) {
  const html = readFileSync(filename, 'utf8');
  for (const match of html.matchAll(/(?:src|href)="\.\/([^"?#]+)"/g)) {
    assert(existsSync(match[1]), `${filename} references missing file ${match[1]}`);
  }
}
console.log(`PASS: 3 routes, 9 itinerary days, ${places.length} places, category coverage, directions, and local assets.`);
