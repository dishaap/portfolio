import express from 'express';

// API-only Express app. It is used by the local/production Node server
// (server/index.js) and by the Vercel serverless function (api/index.js).
const app = express();

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  next();
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

export default app;
