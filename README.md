# M'M Commercial Building — SvelteKit

Static website for M'M Commercial Building (Function Hall, Rooftop Swimming Pool, and
Michaela's Arabic Restobar), converted from a plain HTML/CSS/JS site into
[SvelteKit](https://svelte.dev/docs/kit) with the static adapter (SSG).

## Pages

- `/` — Home (hero, amenities, function hall + venue-services modal, rooftop pool + rates
  modal, restobar, about, gallery with lightbox, contact, footer)
- `/gallery/` — Full gallery with category tabs and lightbox

## Project structure

```
static/               assets copied from the original site (img, gallery, icon, vids)
src/
  app.css             global styles (ported from style.css + small additions)
  app.html            HTML shell (favicon, Remixicon, Swiper CDN)
  routes/
    +layout.js        prerender + trailingSlash config
    +layout.svelte    Navbar + slot + Footer + ScrollToTop
    +page.svelte      home page
    gallery/+page.svelte  full gallery page
  lib/
    stores.js         modal/lightbox open-state stores
    components/       Navbar, Footer, ScrollToTop, VideoModal, VenueModal, PoolModal, Lightbox
```

## Commands

```sh
npm install
npm run dev          # dev server
npm run build        # static build to ./build
npm run preview      # preview the production build
```

The original `index.html`, `full-gallery.html`, `style.css`, and `index.js` are kept for
reference and can be removed once no longer needed.