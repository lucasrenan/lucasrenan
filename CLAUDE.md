# Project: lucasrenan.com

## Stack
- Vite + Tailwind CSS, vanilla JS
- Node 22 via nvm

## Commands
Prefix with `source ~/.nvm/nvm.sh && nvm use 22 &&` (both local and CI use Node 22).
- Dev server: `npm run dev`
- Build: `npm run build` (outputs to `dist/`)
- Preview production build: `npm run preview` (serves `dist/`)

## Layout
- `index.html` — page markup (lives at repo root, Vite entry point)
- `src/main.js` — JS entry; imports `style.css` and `theme.js`
- `src/theme.js` — dark/light theme handling
- `public/` — static assets copied as-is (`lucas-*.avif` portrait variants, favicons, `CNAME`)
- `originals/` — full-res image masters, **not** served or copied by Vite; regenerate the
  `public/lucas-*.avif` variants from `originals/lucas.jpg`

## Images
The hero portrait ships as AVIF only (no JPEG fallback — a deliberate call; browsers without
AVIF support get the `alt` text). Variants are 300/600/900/1400px at sharp's `quality: 50,
effort: 9`, selected via `srcset` + `sizes="(min-width: 768px) 300px, 86vw"`. The `86vw`
tracks `main`'s `px-[clamp(22px,7vw,80px)]` padding; the `300px` is the portrait column's
`clamp(230px,32%,300px)` cap. Update `sizes` if either changes.

## Deployment
- Pushing to `main` auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` — **a commit to main is a production deploy.**
- Custom domain lucasrenan.com is set via `public/CNAME`.
