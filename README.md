# Marka

A demo e-commerce website for a Norwegian natural-products brand — honey, foraged goods, and wild ingredients from the Norwegian outdoors (*marka*). Built as a single-page application with a shop, product pages, a wishlist, a cart, and an editorial magazine section.

## ✨ Features

- **Storefront** — landing page, shop listing, category browsing, and product detail pages
- **Cart** — add products with a chosen quantity, slide-out cart drawer, and checkout page
- **Wishlist** — save favourite products via a heart button; a counter and slide-out drawer in the top banner
- **Magazine** — read articles and write new ones
- **Search** — searchable overlay from the navbar
- **Responsive** — mobile-first layout with a collapsible menu
- **SPA routing** — deep links work on refresh (configured for Vercel)

## 🚀 Tech stack

- **[React 19](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — type safety
- **[Vite 6](https://vite.dev/)** — build tool and dev server
- **[Tailwind CSS v4](https://tailwindcss.com/)** — styling (via the `@tailwindcss/vite` plugin; theme defined in `src/index.css`)
- **[React Router v7](https://reactrouter.com/)** — client-side routing
- **[Zustand](https://zustand-demo.pmnd.rs/)** — global state (cart, wishlist, articles)
- **[lucide-react](https://lucide.dev/)** — icons
- **ESLint** — linting

## 🛠️ Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

## 📁 File structure

```
marka/
├── src/
│   ├── components/
│   │   ├── CartDrawer.tsx        # Slide-out shopping cart
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Navbar.tsx            # Top banner: nav, search, wishlist & cart icons
│   │   ├── ScrollTop.tsx         # Scrolls to top on route change
│   │   ├── SearchBar.tsx         # Search overlay
│   │   └── WishlistDrawer.tsx    # Slide-out wishlist
│   ├── layout/
│   │   └── index.tsx             # App shell (navbar, drawers, outlet, footer)
│   ├── pages/
│   │   ├── About.tsx             # Om oss
│   │   ├── ArticleDetail.tsx     # Single magazine article
│   │   ├── Categories.tsx        # Kategorier
│   │   ├── Checkout.tsx          # Kasse
│   │   ├── Contact.tsx           # Kontakt
│   │   ├── Home.tsx              # Landing page
│   │   ├── Journal.tsx           # Magasin (article list)
│   │   ├── ProductDetail.tsx     # Product page (qty + add to cart/wishlist)
│   │   ├── Shop.tsx              # Butikk (product listing)
│   │   └── WriteArticle.tsx      # Create a new article
│   ├── store/
│   │   └── cartStore.ts          # Zustand store: cart, wishlist & articles
│   ├── public/
│   │   └── plant.svg
│   ├── index.css                # Tailwind import + theme tokens
│   ├── main.tsx                 # Entry point + router definition
│   └── vite-env.d.ts
├── index.html
├── vercel.json                  # SPA rewrite so routes work on refresh
├── vite.config.ts
├── eslint.config.js
├── tsconfig*.json
├── package.json
└── README.md
```

## 🗺️ Routes

| Path              | Page            |
| ----------------- | --------------- |
| `/`               | Home            |
| `/butikk`         | Shop            |
| `/produkt`        | Product detail  |
| `/kategorier`     | Categories      |
| `/magasin`        | Journal         |
| `/artikkel`       | Article detail  |
| `/skriv-artikkel` | Write article   |
| `/om-oss`         | About           |
| `/kontakt`        | Contact         |
| `/kasse`          | Checkout        |

## 🚢 Deployment

Deployed on **Vercel**. `vercel.json` rewrites all requests to `index.html` so that
client-side routes resolve correctly on a page refresh or direct link.

> **Note:** Cart and wishlist state is held in memory (Zustand) and resets on page reload.
