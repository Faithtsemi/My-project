# C'ee Optometrist: Practice Website

A responsive, single-page website for C'ee Optometrist, a two-branch optometry practice in Mmabatho and Mafikeng, North West, South Africa.

Built as a static site (no framework, no build step) so it can be hosted for free and edited without tooling.

## Features

- Responsive single-page layout (mobile menu, fluid grids)
- Product showcase for sunglasses, optical frames and contact lenses, with prices
- **WhatsApp enquiry cart**: visitors tap "+ Add" on items and send a pre-filled WhatsApp message listing their selections
- Image lightbox with multi-angle support (arrows, dots and keyboard navigation)
- Embedded Google Maps for both branches, working hours, and Google review links
- Floating WhatsApp contact button, social links, and an appointment request form
- Accessibility basics: skip link, focus styles, alt text, `prefers-reduced-motion` support

## Tech

HTML5, CSS3 (custom properties, grid, flexbox) and vanilla JavaScript. Fonts: Fraunces and Inter (Google Fonts).

## Run locally

Open `index.html` in a browser. Keep the folder structure as it is so the stylesheet, script and images load.

## Project structure

```
index.html     page content
styles.css     all styling
products.js    the frames and lenses list (edit this to change products and prices)
script.js      builds the product grids, mobile menu, enquiry cart, image lightbox
images/        logos, product photos, team and doctor photos
```

## Adding or changing products

Products live in `products.js`, so there is no HTML to copy. Save the photos in `images/`, then copy an entry and change the values.

A frame with one colour:

```js
{
  name: "Carrera Aviator",
  group: "sunglasses",           // "sunglasses", "optical", "budget" or "lenses"
  price: 2000,                   // rand, or null to show "Ask in store"
  images: ["images/carrera.jpg"],
  alt: "Carrera aviator sunglasses, matte black and gold",
  enquiry: "Carrera Aviator sunglasses"
}
```

A frame in several colours shows a colour dot for each. Tapping a dot swaps the photo and the name used in the WhatsApp enquiry:

```js
{
  name: "Teardrop Aviator",
  group: "budget",
  price: 2000,                   // one price for every colour
  enquiry: "Budget Teardrop Aviator frame",
  colors: [
    { name: "White & red", swatch: ["#dddbca", "#d8452d"], images: ["images/teardrop-white-red-1.jpg"] },
    { name: "Pink & mint", swatch: ["#f2a6c2", "#a6dcc3"], images: ["images/teardrop-pink-mint-1.jpg"] }
  ]
}
```

- **Angles:** add more paths to a colour's `images`, for example `["images/a-1.jpg", "images/a-2.jpg", "images/a-3.jpg"]`. The lightbox then shows arrows and dots for that colour.
- **Dot colour:** `swatch` is one colour (`"#c42a2e"`) or two for a two-tone frame (`["#dddbca", "#d8452d"]`).
- **Shared photo:** a colour with no `images` uses the product's own `images` (the contact lenses do this until each colour has a photo).

## Deployment

Static hosting works (Netlify, GitHub Pages or Vercel). Point the custom domain's DNS at the host and leave the existing MX records untouched so email keeps working.

## Notes

Client project. Business content and photos belong to C'ee Optometrist.
