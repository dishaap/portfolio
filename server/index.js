import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import app from './app.js';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const port = process.env.PORT || 3000;

if (fs.existsSync(dist)) {
  app.use(
    express.static(dist, {
      index: false,
      setHeaders(res, file) {
        // Vite fingerprints everything in /assets, so it can be cached forever.
        res.setHeader(
          'Cache-Control',
          file.includes(`${path.sep}assets${path.sep}`)
            ? 'public, max-age=31536000, immutable'
            : 'no-cache'
        );
      },
    })
  );

  // Single-page app fallback.
  app.use((req, res) => {
    res.set('Cache-Control', 'no-cache');
    res.sendFile(path.join(dist, 'index.html'));
  });
} else {
  console.warn('No dist/ folder found. Run "npm run build" first to serve the site.');
}

app.listen(port, () => {
  console.log(`Portfolio server listening on http://localhost:${port}`);
});
