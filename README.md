# G'Forge Foods website

Static Astro site for G'Forge Foods, Techiman. *Forging Healthy Futures.*

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/ (deploy to Netlify / Cloudflare Pages)
```

## Where things live

| What | File |
|---|---|
| Phone numbers, WhatsApp, email, TikTok, branches, hours, opening date | `src/data/site.ts` |
| Menu items, categories, prices, best-sellers | `src/data/menu.ts` |
| FAQs and testimonials | `src/data/content.ts` |
| Brand colours and fonts | `src/styles/global.css` (`:root` tokens) |

## Adding the client's photos and logo

- **Logo:** save as `src/assets/brand/logo.png` (or `.webp`/`.svg`). It replaces the text wordmark automatically.
- **Photos:** save into `src/assets/photos/` using these exact names (jpg/png/webp all work).
  Astro resizes, converts to WebP and lazy-loads them at build time.

| Filename | Used on |
|---|---|
| `hero` | Home hero (square crop) |
| `banku-tilapia`, `jollof-chicken`, `fried-rice`, `noodles` | Menu: Meals |
| `pizza` | Menu: Pizzas |
| `shawarma`, `loaded-fries`, `doughnuts`, `birthday-cake` | Menu: Pastries & Snacks |
| `sobolu` | Menu: Beverages |
| `catering` | Home + Catering page |
| `storefront` | About hero (wide crop) |
| `interior` | About "Our story" |
| `founder` | About: leadership (square crop) |

Anything missing shows a branded "Photo coming soon" placeholder.

## Ordering

All ordering goes to WhatsApp `+233 24 724 9385` with a pre-filled message
(item × quantity on the menu; full event details on the catering form). No backend is needed.
