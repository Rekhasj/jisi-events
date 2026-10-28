# JiSi Events & Decorations

Website for JiSi Events & Decorations, Kuppam (AP): birthday, baby shower,
haldi, ring ceremony, naming ceremony, festival, house-warming and office
decorations, with booking via WhatsApp.

Built with React 19, Vite, React Router and Bootstrap 5.

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # check the code with ESLint
```

## Where things live

| What | Where |
| --- | --- |
| Phone, email, WhatsApp links, location | `src/data/contactInfo.js` |
| Decoration categories and items | `src/data/decorationData.js` |
| Gallery and carousel photos | `src/data/galleryData.js` |
| Packages | `src/data/packageData.js` |
| Pages | `src/components/<Page>/` |
| Shared styles (brand colours, buttons, hover effects) | `src/index.css` |

To change the phone number or email, edit `src/data/contactInfo.js` only —
every button and link on the site reads from it.

## Adding photos

Save new photos as WebP (about 1600px wide) in `src/assets/<Category>/`, then
import them in `src/data/galleryData.js`. Large PNG/JPEG files from a phone
are often 2–3 MB each and slow the site down on mobile.

## Deploying

The site uses client-side routing, so the host must serve `index.html` for
every path (for example, a rewrite rule on Netlify or Vercel). Otherwise
refreshing a page like `/gallery` shows the host's 404 page.
