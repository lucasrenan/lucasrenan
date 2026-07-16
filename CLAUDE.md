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
- `public/` — static assets copied as-is (`lucas.jpg`, `CNAME`)

## Deployment
- Pushing to `main` auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` — **a commit to main is a production deploy.**
- Custom domain lucasrenan.com is set via `public/CNAME`.
