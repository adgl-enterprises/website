# ADGL Mountain Tech

Marketing site for **ADGL Enterprises** — blockchain R&D, ASIC development, and related technology, based in Colorado Springs.

## Local development

Requirements: [Node.js](https://nodejs.org/) and npm (see [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if you use it).

```sh
git clone <YOUR_GIT_URL>
cd adgl-mountain-tech
npm install
npm run dev
```

The dev server listens on port 8080 by default (see `vite.config.ts`).

## Scripts

- `npm run dev` — Vite dev server with hot reload
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint

## Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment (Netlify)

Production target is `https://adgl-enterprises.com`.

This repo is configured for Netlify with:

- `netlify.toml` (`npm run build`, publish `dist/`)
- `public/_redirects` for SPA routing (`/* -> /index.html 200`)
- social metadata in `index.html` pointing to `https://adgl-enterprises.com/og-image.png`

### Netlify setup checklist

1. Connect this GitHub repository in Netlify.
2. Confirm build command is `npm run build` and publish directory is `dist`.
3. Set custom domain to `adgl-enterprises.com` and enable HTTPS.
4. Optionally add `www.adgl-enterprises.com` as a domain alias and choose your preferred primary domain.

## Editing in the cloud

You can edit files on GitHub in the browser, or open the repo in [GitHub Codespaces](https://github.com/features/codespaces) and run the same `npm install` / `npm run dev` workflow there.
