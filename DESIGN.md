---
name: Hashgen Calibration Lab
description: A local Web Crypto instrument for turning text into reproducible SHA fingerprints.
colors:
  night: "#10171a"
  panel: "#182327"
  ink: "#e6eee6"
  quiet: "#8da0a0"
  signal-lime: "#c9f36b"
  caution-orange: "#f0975b"
  line: "#405257"
typography:
  display:
    fontFamily: "Avenir Next, Trebuchet MS, sans-serif"
    fontSize: "clamp(4rem, 9vw, 9rem)"
    fontWeight: 500
    lineHeight: 0.78
    letterSpacing: "-0.1em"
  serif-accent:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(4rem, 9vw, 9rem)"
    fontWeight: 400
  code:
    fontFamily: "Courier New, monospace"
    fontSize: "14px"
    lineHeight: 1.65
  label:
    fontFamily: "Avenir Next, Trebuchet MS, sans-serif"
    fontSize: "10px"
    letterSpacing: "0.15em"
rounded:
  none: "0"
spacing:
  instrument: "28px"
  workbench: "18px"
components:
  generate:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.night}"
    rounded: "{rounded.none}"
    padding: "12px 15px 12px 18px"
---

# Design System: Hashgen Calibration Lab

## Overview

**Creative North Star: "The late-night checksum bench."**

Hashgen treats text as a specimen and the digest as a reading. Calibration ticks, a selector strip, a source tray, and an output window make the Web Crypto mechanism visible without pretending this is a security product.

## Colors

Graphite blue-black supports long sessions. Signal lime is the instrument's active ink; caution orange only marks the transfer between source and result.

### Primary
- **Signal lime** (#c9f36b): selected algorithm, digest output, and generate control.
- **Caution orange** (#f0975b): digest connector and operational transition.

### Neutral
- **Lab night** (#10171a): page ground.
- **Bench panel** (#182327): instrument surface.
- **Lab ink** (#e6eee6): active copy.
- **Quiet readout** (#8da0a0): metadata and inactive copy.
- **Calibration line** (#405257): ticks and dividers.

## Typography

**Display Font:** Avenir Next, Trebuchet MS, sans-serif with Georgia for the italic accent
**Body Font:** Avenir Next, Trebuchet MS, sans-serif
**Code Font:** Courier New, monospace

**Character:** clean instrument labels, high-scale display type, and unambiguous fixed-width output.

### Hierarchy
- **Display** (500, clamp 4rem–9rem, .78): lab title.
- **Headline** (400, clamp 2rem–3.7rem, .9): instrument section title.
- **Code** (400, 14–20px, 1.65): source and hexadecimal result.
- **Label** (400, 10px, uppercase, .15em): calibration metadata.

## Layout

A calibration header leads into one framed instrument. Algorithm selection spans the full bench; the source and output sit opposite each other with a visible `digest` connector. On mobile the workbench becomes a vertical instrument sequence.

## Elevation & Depth

Depth is tonal: night ground, panel surface, and inset source/output windows. There are no shadows; the lime output and line network provide sufficient focus.

## Shapes

Rectangular panels and controls are deliberate. No card radius, no pill controls, and no decorative glass blur. The radio dot and calibration ticks are the only small geometric marks.

## Components

### Algorithm selector
- **Rest:** quiet label and unlit ring.
- **Selected:** lime ring, panel tint, and lime metadata.

### Source / output windows
- **Source:** editable dark window with byte count and clear action.
- **Output:** read-only dark window with wrapping hexadecimal and copy action.

### Buttons
- **Primary:** lime rectangular `Generate digest` control.
- **Focus:** lime outline with offset; disabled generation communicates busy state.

## Do's and Don'ts

### Do:
- **Do** keep source, algorithm, and digest visible as one causal chain.
- **Do** keep the local-only and Web Crypto honesty visible.

### Don't:
- **Don't** turn the digest into a generic dashboard metric.
- **Don't** imply hashing provides encryption, storage, or password safety.
