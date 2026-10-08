---
name: Kansai, together
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
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(46px, 5.25vw, 74px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display-emphasis:
    fontFamily: "Lora, serif"
    fontSize: "0.96em"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "DM Sans, sans-serif"
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

# Design System: Kansai, together

## Overview

A coastal atlas translated into a clear travel planner. Photography carries the destination; deep teal type and pale green fields organize decisions. The interface uses familiar controls and a connected route strip rather than a separate map workspace. This records the built system under the user's autonomous design instruction.

## Colors

Deep teal is used for primary actions, selection, and strong text. Sea-glass mint owns the itinerary region. The near-white ground keeps the page usable in daylight. Sightseeing, dining, and fitness badges use distinct pale green, warm sand, and blue tints with dark text.

## Typography

DM Sans carries navigation, headings, and content. Lora italic is confined to the hero emphasis. Fonts are self-hosted. Display type scales down to 40–58px on small screens; section headings become 27px. Functional small text stays at least 11px. Dense itinerary and place content uses 12–13px, with generous line height.

## Layout

The main container is 1200px with 48px side gutters at typical desktop sizes. Desktop uses three columns for route and place choices, and a broad itinerary beside a 300px summary. At 800px, place choices use two columns; below 600px, the hero, routes, places, and checklist become single columns with 20px side gutters. The route strip becomes horizontal on mobile. Printing reveals all three itinerary days and removes interactive controls.

## Elevation & Depth

Surfaces are separated by borders and tonal fields. The transient saved-place notification alone uses a soft, offset shadow. Photographic captions use a dark fade for text contrast.

## Shapes

Photographic surfaces and cards use 16px corners. Action buttons use 9px corners; category filters use 7px. Circular route nodes describe a logical sequence, not geographic position.

## Components

Route choices are full-card toggle buttons with an explicit selected check. Day tabs use a roving keyboard focus and arrow-key navigation. Place filters expose their pressed state. Bookmark buttons pair a pressed state with a clear action label. The main checklist uses native checkboxes. Focus outlines use a visible warm accent with a 5px offset. Reduced motion disables the route reveal and transitions.

## Do's and Don'ts

- Do retain clear labels, source links, and readable content when adding a stop.
- Do pair selection color with a check or pressed state.
- Do label representative photography honestly.
- Don't substitute an unavailable booking or live traffic claim for a planning estimate.
- Don't add a separate navigation drawer for the existing three links.
