# Kansai, together

A responsive two-night trip recommender for five travelers starting in Namba, Osaka. The car is already arranged, so the site only covers where to go.

Live site: https://hoon-e.github.io/j-test/

Compare Awaji Island and Kobe, Kyoto and Lake Biwa, Wakayama and Shirahama, Kurashiki and Okayama, or Minoh and Arima Onsen. Pick a route at the top; the selected route shows all three days side by side, the overnight bases, a Google Maps driving loop, and filterable sights, food, and gym options. Far destinations are visited first so the last day (flight day) is a short drive back.

## Run locally

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. There is no install or build step.

## Check

```sh
node check.mjs
```

The check validates itinerary references, two-night / three-day coverage, category coverage, map URL encoding, and asset paths. 

## Edit and publish

Update venue and route content in `data.mjs`, UI behavior in `app.mjs`, and layout in `styles.css`. All assets and fonts are local; photography and font licenses are listed in `credits.html` and `assets/credits.json`.

The source lives on `main`. GitHub Pages serves the root of `gh-pages`, which contains only `index.html`, `credits.html`, `styles.css`, `app.mjs`, `data.mjs`, `.nojekyll`, and `assets/` (without `*.webp.json`). Publish those files to `gh-pages` after updating and checking the source. Design records and checks are excluded from the published site.

Venue information was checked against linked official sources on 8 October 2026 (Kurashiki and Minoh routes on 11 October 2026). Driving times are estimates. Bookings, live traffic, and gym eligibility are not provided by the site.
