# FurniStore

Modern, responsive furniture store built with React, React Router, Tailwind CSS, and Vite.

## Run locally

```bash
npm install
npm start
```
- Dev server: http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy

- Netlify: uses `netlify.toml` and `public/_redirects` for SPA routing.
- Vercel: uses `vercel.json` with routes and `dist` output.

Both platforms:
- Build command: `npm run build`
- Output directory: `dist`

## Structure

```
src/
  components/ (Navbar, Footer, Hero, Services, ProductCard)
  pages/      (Home, Products, About, Contact)
  data/       (products.js)
```

Features:
- Sticky navbar
- Hero section
- Services (Free Delivery, 24/7 Support, Secure Payment)
- Featured products (6 items)
- Products page with search filter over static data
- About (store description & mission)
- Contact (form + map placeholder)
- Neutral palette (white, beige, brown, black)
- Mobile responsive with hover effects on product cards