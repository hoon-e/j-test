---
name: 간사이 드라이브
description: Daylight, sea-glass color, and clear choices for a little Kansai escape.
colors:
  ink: "#183e36"
  muted: "#53675f"
  primary: "#174d42"
  accent: "#256c58"
  ground: "#fbfcf8"
  mint: "#e7efe7"
  line: "#d9e2d9"
  white: "#ffffff"
typography:
  display:
    fontFamily: "DM Sans, Apple SD Gothic Neo, Malgun Gothic, sans-serif"
    fontSize: "clamp(42px, 4.4vw, 64px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display-emphasis:
    fontFamily: "inherit"
    fontSize: "0.96em"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "DM Sans, Apple SD Gothic Neo, Malgun Gothic, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, Apple SD Gothic Neo, Malgun Gothic, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "DM Sans, Apple SD Gothic Neo, Malgun Gothic, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  badge: "4px"
  filter: "7px"
  button: "9px"
  surface: "16px"
spacing:
  tight: "8px"
  control: "14px"
  grid: "22px"
  content: "24px"
  section: "76px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "13px 21px"
    typography: "{typography.control}"
  button-outline:
    textColor: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: "13px 21px"
  place-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "21px 23px 22px"
---

# Design System: 간사이 드라이브

## Overview

A coastal atlas translated into a clear travel planner. Photography carries the destination; deep teal type and pale green fields organize decisions. The interface uses familiar controls and a connected route strip rather than a separate map workspace. This records the built system under the user's autonomous design instruction.

## Colors

Deep teal is used for primary actions, selection, and strong text. Sea-glass mint owns the itinerary region. The near-white ground keeps the page usable in daylight. Sightseeing, dining, and fitness badges use distinct pale green, warm sand, and blue tints with dark text.

## Typography

Korean copy uses the device’s Korean sans serif (Apple SD Gothic Neo or Malgun Gothic); Latin characters use self-hosted DM Sans. The hero emphasis uses the same family and weight, with green color and no italic styling. Korean words stay together where space allows, with wrapping for long strings. Display type scales down to 40–58px on small screens; section headings become 27px. Functional labels stay at least 12px. Descriptive itinerary, place, access, and checklist content stays at least 14px on screen, with generous line height. Print text stays at least 12px. Trip and night labels use normal tracking.

## Layout

The main container is 1200px with 48px side gutters at typical desktop sizes. The route picker is the first-viewport hero: five photo cards in one row on desktop, a horizontal snap-scroll row below 1100px. The selected route sits on the mint field as a photo plus summary (highlights, nights, driving note, map link), followed by all three days as side-by-side white columns; they stack below 1100px. Place cards are text-only, ordered sights, food, gyms, three columns on desktop, two at tablet, one below 760px with 20px gutters.

## Elevation & Depth

Surfaces are separated by borders and tonal fields. The transient saved-place notification alone uses a soft, offset shadow. Photographic captions use a dark fade for text contrast.

## Shapes

Photographic surfaces and cards use 16px corners. Action buttons use 9px corners; category filters use 7px. Circular route nodes describe a logical sequence, not geographic position.

## Components

Route choices are full-card toggle buttons with an explicit selected check. Day columns are always visible; there are no tabs. Place filters show counts and expose their pressed state. Selecting a route scrolls to the plan with one short rise-in of the plan. Focus outlines use a visible warm accent with a 5px offset. Reduced motion disables the route reveal and transitions.

## Do's and Don'ts

- Do retain clear labels, source links, and readable content when adding a stop.
- Do pair selection color with a check or pressed state.
- Do label representative photography honestly.
- Don't substitute an unavailable booking or live traffic claim for a planning estimate.
- Don't add a separate navigation drawer for the existing three links.
