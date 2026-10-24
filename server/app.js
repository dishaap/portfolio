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

app.get('/api/contributions', async (req, res) => {
  const { from, to } = req.query;
  const isValidDate = (value) =>
    typeof value === 'string' &&
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(`${value}T00:00:00Z`)) &&
    new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value;

  if (!isValidDate(from) || !isValidDate(to) || from > to) {
    return res.status(400).json({ error: 'A valid from and to date are required.' });
  }

  const { GITHUB_TOKEN, GITHUB_USERNAME } = process.env;
  if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
    return res.status(503).json({ error: 'GitHub contributions are not configured on the server.' });
  }

  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          login: GITHUB_USERNAME,
          from: `${from}T00:00:00Z`,
          to: `${to}T23:59:59Z`,
        },
      }),
    });
    const result = await response.json();

    if (!response.ok || result.errors) {
      console.error('GitHub contributions query failed:', result.errors ?? response.status);
      return res.status(502).json({ error: 'GitHub could not provide contribution data.' });
    }

    const user = result.data?.user;
    if (!user) {
      return res.status(404).json({ error: 'The configured GitHub user was not found.' });
    }

    const levelMap = {
      NONE: 0,
      FIRST_QUARTILE: 1,
      SECOND_QUARTILE: 2,
      THIRD_QUARTILE: 3,
      FOURTH_QUARTILE: 4,
    };
    const contributions = user.contributionsCollection.contributionCalendar.weeks
      .flatMap(({ contributionDays }) => contributionDays)
      .map(({ date, contributionCount, contributionLevel }) => ({
        date,
        count: contributionCount,
        level: levelMap[contributionLevel],
      }));

    return res.json(contributions);
  } catch (error) {
    console.error('Unable to fetch GitHub contributions:', error);
    return res.status(502).json({ error: 'Unable to reach GitHub for contribution data.' });
  }
});

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

export default app;
