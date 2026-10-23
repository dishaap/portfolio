# Portfolio

React (Vite) front end + Node/Express back end, built from the Figma design.
Four pages (Home, About me, Projects, Get in touch) switch with the vertical tabs and are deep-linkable via `#home`, `#about`, `#projects`, `#contact`.

## Edit your content

Everything you'll want to change is in `src/data/content.js`:

- Text on each page (currently the design's placeholder copy)
- Email, GitHub and LinkedIn links (placeholders, replace them)
- Projects: add a screenshot to `public/` and set `image: '/your-file.png'`. Add more items to `items` and up/down arrows appear automatically.

Colors, spacing and type sizes are in `src/styles.css`.

## Run locally

```bash
npm install
npm run dev          # front end at http://localhost:5173
npm run dev:api      # optional: API at http://localhost:3000 (dev proxies /api to it)
```

## Run as a single Node server

```bash
npm run build
npm start            # serves dist/ and /api/health on http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On vercel.com choose **Add New, Project**, import the repo, and click **Deploy**. `vercel.json` already sets the build command, the `dist` output folder and the `/api` rewrite.

Or from the terminal:

```bash
npx vercel          # preview
npx vercel --prod   # production
```

The site is served as static files from `dist/`, and `api/index.js` runs the Express app as a serverless function (try `/api/health`).

## Structure

```
src/            React app (components, content, styles)
server/app.js   Express API (shared by local server and Vercel)
server/index.js Node server that also serves the built site
api/index.js    Vercel serverless entry
vercel.json     Vercel config
```
