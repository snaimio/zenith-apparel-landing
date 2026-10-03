# Zenith Apparel — Brand Landing Page

> A modern, futuristic, and sustainable fashion brand single-page landing website. Demonstrates advanced responsive layouts, slide-out mobile drawer navigation, interactive product catalogs, and contemporary dark-mode aesthetics.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive Design](https://img.shields.io/badge/Design-Responsive-success)](https://web.dev/responsive-web-design-basics/)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [HTML & CSS Skills Demonstrated](#html--css-skills-demonstrated)
- [Project Structure](#project-structure)
- [Responsive Design Implementation](#responsive-design-implementation)
- [Interactive UI Elements](#interactive-ui-elements)
- [Getting Started](#getting-started)
- [Author & License](#author--license)

---

## Overview

**Zenith Apparel** is a conceptual streetwear brand committed to eco-friendly manufacturing and futuristic apparel design. This single-page landing site provides an immersive narrative journey through brand values, impact statistics, eco-conscious streetwear collections, and customer communication channels.

---

## Key Features

- **Hero Landing Viewport**: High-resolution atmospheric banner with glowing neon typography accents.
- **Off-Canvas Slide-Out Navigation**: Smooth slide-in mobile navigation menu powered by CSS and JavaScript.
- **Brand Story & Core Mission**: Multi-column editorial sections highlighting sustainable fabrics and zero-waste initiatives.
- **Impact Metrics & Values Grid**: Key statistics counter cards showcasing recycled materials, circular production, and emission cuts.
- **Categorized Streetwear Catalog**: Grid presentation featuring:
  - *T-Shirts & Tops Collection*
  - *Denim & Pants Collection*
  - *Outerwear & Jackets Collection*
- **Contact & Inquiry Section**: Dark-themed user inquiry form with responsive input fields.

---

## HTML & CSS Skills Demonstrated

### 1. Advanced HTML5 Structure & Semantics
- Modular `<section>` partitions identified by unique target anchors (`#home`, `#about`, `#products`, `#contact`).
- Smooth on-page navigation (`scroll-behavior: smooth`).
- Accessible form controls with descriptive placeholder states.

### 2. Modern CSS3 Styling & Architecture
- **Editorial Typography Pairing**: Google Fonts combination of `DM Serif Display` (headlines) and `Public Sans` (high-legibility body text).
- **Dark Theme Palettes & Accent Colors**: Contrast ratios with deep midnight blues (`#141E30`), charcoals (`#111`), and vibrant neon emerald highlights (`#00ff9d`).
- **Responsive Flexbox & Grid**: Adaptable container structures that dynamically reflow from desktop columns into mobile stacks.
- **Transform & Hover Micro-Interactions**: Image zoom effects on product cards and button hover states.

---

## Project Structure

```plaintext
html_assignment_3/
├── assets/
│   └── images/
│       ├── aboutImg.jpg               # About section feature photo
│       ├── headerBkg.jpg              # Hero banner background
│       ├── jacket1.jpg ... jacket3.jpg# Outerwear collection products
│       ├── jeans1.jpg ... jeans3.jpg  # Denim collection products
│       ├── logo.png                   # Zenith brand logo
│       ├── missionImage.jpg           # Mission statement imagery
│       └── tshirt1.jpg ... tshirt3.jpg# T-shirts collection products
├── css/
│   └── app.css                        # Main stylesheet with media queries
├── js/
│   ├── app.js                         # Mobile navigation drawer interaction
│   └── jquery.js                      # jQuery library dependency
├── .gitignore                         # Git exclusion rules
├── index.html                         # Single-page landing site
├── LICENSE                            # MIT Open Source License
└── README.md                          # Documentation
```

---

## Responsive Design Implementation

| Breakpoint | Layout Strategy |
| :--- | :--- |
| **Desktop (`> 1024px`)** | Multi-column grid for products, side-by-side about & mission splits, horizontal stats row |
| **Tablet (`841px - 1024px`)** | 2-column value & stat cards, flexible image grids |
| **Mobile (`<= 840px`)** | Stacked full-width product cards, mobile slide-out drawer navigation, optimized touch targets |

---

## Interactive UI Elements

- **Off-Canvas Navigation Drawer**: Triggered via animated hamburger menu button, sliding smoothly from the viewport edge.
- **Interactive Form Inputs**: Dynamic focus borders and customized placeholders.

---

## Getting Started

1. Clone or download the repository:
   ```bash
   git clone https://github.com/<username>/html_assignment_3.git
   cd html_assignment_3
   ```
2. Open `index.html` in your browser.

---

## Author & License

- **Author**: Sheikh Naim
- **License**: Released under the [MIT License](LICENSE).
