<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- All site text lives in `src/i18n/translations.ts` (es default at `/`, en under `/en`); route files only pick language + SEO via `pageHead()` — keeps both languages in sync.
- Business data (brand, logo, contact, address, hours, treatments, images) lives in `src/config/*`; components never hardcode it — so the owner's details change in one place.
- All booking links go through `buildWhatsAppUrl()` in `src/lib/whatsapp.ts` — one number, consistent pre-filled message.
- Header has no hamburger menu: page links are always visible (one row on desktop, a second row on small screens) — the owner wants every page one tap away; page tops pad for the taller small-screen header.
- `public/sitemap.xml` is a static file listing every `ROUTES` path on the production domain (also `BRAND.siteUrl`); `src/test/sitemap.test.ts` fails if a page is added without updating it — Vercel serves it straight from `public/` as real XML. It holds only `urlset`/`url`/`loc` (hreflang lives in page heads): `xhtml:link` entries make Chrome render it as run-on text.
- Page SEO lives in `src/lib/seo.ts` `pageHead()`: robots meta, canonical/hreflang on `BRAND.siteUrl`, share images from 1200×630 copies in `src/assets/og` (`OG_IMAGES`), and business JSON-LD built only from `src/config/*` (empty fields omitted, never ratings) — keeps search data truthful and in one place.
- Site images are real files in `src/assets/` imported through Vite (favicon in `public/`), never `.asset.json` CDN pointers — the site is also deployed on Vercel, where Lovable's `/__l5e/` asset paths 404.
- `vercel.json` sets `trailingSlash: false` so slash variants (`/contacto/`) get a permanent redirect at Vercel's edge instead of the app's temporary 307 — one URL per page for Google.
