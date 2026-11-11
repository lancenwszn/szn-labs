# SZN Labs — official website

Next.js (App Router) · React · TypeScript · Tailwind CSS · Lucide icons.

```bash
npm install
npm run dev
```

## Where to change things

| What | Where |
| --- | --- |
| Site URL, contact email, form delivery | environment variables — see `.env.example` |
| Logo | files in `public/brand/`, paths in `logo` in `src/config/site.ts` (supplied symbol + wordmark taken from the styleboard; swap in SVG masters when available) |
| Favicon / app icon / share image | `src/app/icon.png`, `src/app/apple-icon.png`, `src/app/opengraph-image.png` |
| Products | the array in `src/data/products.ts` |
| Brand colors and type | `@theme` block in `src/app/globals.css` |
| Privacy / Terms text | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` (draft notice: `legalDraft` in `src/config/site.ts`) |

## Contact form

The form posts to `src/app/api/contact/route.ts`, which validates the
submission and sends it as an email through [Resend](https://resend.com)'s
HTTP API. It needs `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and
`CONTACT_FROM_EMAIL` (a sender on a domain verified in Resend). Until those are
set, submissions fail with a clear message to the visitor and nothing is sent.
The route needs a host that runs Next.js server functions (e.g. Vercel); it
does not work with a static export.

## Products

Entries in `src/data/products.ts` render automatically. `featured: true` gives
a product a full-width card; the rest fill a grid. If the list is empty the
section shows a Coming Soon state.
