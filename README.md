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

## Deploying to Vercel

The project is a standard Next.js app and needs no `vercel.json`: import the
GitHub repository in Vercel and keep the detected defaults (framework Next.js,
build command `next build`, Node.js 20 or newer).

Set these under Settings -> Environment Variables for the Production
environment, then redeploy (public variables are read at build time):

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | recommended | Final public URL, e.g. `https://your-domain`. Falls back to the Vercel production domain. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | optional | Contact address shown on the site. |
| `RESEND_API_KEY` | for the form | Resend API key. |
| `CONTACT_TO_EMAIL` | for the form | Inbox that receives messages. |
| `CONTACT_FROM_EMAIL` | for the form | Sender on a domain verified in Resend. |

The contact endpoint limits each IP address to 5 messages per 10 minutes.
The limit is kept in memory per server instance, so it is best-effort.

Before launch: review the legal drafts and set `legalDraft` to `false` in
`src/config/site.ts`.
