# SZN Labs — official website

Next.js (App Router) · React · TypeScript · Tailwind CSS · Lucide icons.

```bash
npm install
npm run dev
```

## Where to change things

| What | Where |
| --- | --- |
| Contact email, form endpoint, site URL | `.env` (see `.env.example`) or `src/config/site.ts` |
| Logo symbol | put the approved file in `public/brand/`, set `logo.symbol` in `src/config/site.ts` |
| Favicon | add the symbol as `src/app/icon.svg` (or `icon.png`) |
| Products | append to the array in `src/data/products.ts` |
| Brand colors and type | `@theme` block in `src/app/globals.css` |
| Privacy / Terms text | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` |

While `products` is empty the Products section shows a Coming Soon state; with entries it becomes a card grid automatically.
