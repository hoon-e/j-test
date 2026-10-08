# Kansai, together

A responsive two-night road-trip planner for five travelers starting in Namba, Osaka.

Live site: https://hoon-e.github.io/j-test/

Compare Awaji Island and Kobe, Kyoto and Lake Biwa, or Wakayama and Shirahama. The selected route updates the three-day itinerary, overnight bases, driving loop, and sightseeing, dining, and gym options. Saved stops stay in the browser on the current device. The print view includes all three itinerary days.

## Run locally

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. There is no install or build step.

## Check

```sh
node check.mjs
```

The check validates itinerary references, two-night / three-day coverage, category coverage, map URL encoding, and asset paths. Browser checks cover route switching, day tabs, filters, saving, and desktop/mobile layouts.

## Edit and publish

Update venue and route content in `data.mjs`, UI behavior in `app.mjs`, and layout in `styles.css`. All assets and fonts are local; photography and font licenses are listed in `credits.html` and `assets/credits.json`.

The source lives on `main`. GitHub Pages serves the root of `gh-pages`, which contains only `index.html`, `credits.html`, `styles.css`, `app.mjs`, `data.mjs`, `.nojekyll`, and `assets/`. Publish those files to `gh-pages` after updating and checking the source. Design records and checks are excluded from the published site.

Venue information was checked against linked official sources on 8 October 2026. Driving times are estimates. Dates, accommodation availability, live traffic, restaurant reservations, and gym eligibility are not provided by the site.
