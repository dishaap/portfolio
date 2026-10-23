// All editable portfolio content lives here. Colors come from the Figma palette.

export const PAGES = [
  { id: 'home', label: 'HOME', bg: '#efc692', ink: '#483e3c' },
  { id: 'about', label: 'ABOUT ME', bg: '#b7734e', ink: '#852d2c' },
  { id: 'projects', label: 'PROJECTS', bg: '#852d2c', ink: '#b7734e' },
  { id: 'contact', label: 'GET IN TOUCH', bg: '#483e3c', ink: '#efc692' },
];

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus mollis mauris quis consectetur. In hac habitasse platea dictumst. In magna massa, malesuada id pretium at, dapibus sed ante.';
const LOREM_LONG = `${LOREM} Aliquam sed sapien id diam elementum maximus id id diam. Pellentesque elit turpis, blandit eget blandit et, porta sed est.`;

export const CONTENT = {
  name: 'Disha',
  home: {
    heading: 'HI, I’M DISHA :)',
    body: LOREM_LONG,
  },
  about: {
    heading: 'ABOUT ME',
    body: LOREM,
    timeline: [
      {
        title: 'FREELANCER',
        meta: 'JUN 2026 - PRESENT',
        body: LOREM,
      },
      {
        title: 'GAME DEVELOPER',
        meta: 'CANDLESTICK GAMES • OCT 2025 - MAY 2026',
        body: LOREM,
      },
      {
        title: 'FULL-STACK DEVELOPER',
        meta: 'CULTUREFOUNDRY STUDIOS • MAY 2024 - SEP 2025',
        body: LOREM_LONG,
      },
      {
        title: 'B.SC IN COGNITIVE SYSTEMS',
        meta: 'UNIVERSITY OF BRITISH COLUMBIA • SEP 2020 - MAY 2025',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus mollis mauris quis consectetur.',
      },
    ],
  },
  projects: {
    heading: 'PROJECTS',
    items: [
      {
        title: 'CROSS-LINGUISTIC PROJECTION FOR PARTS-OF-SPEECH TAGGING IN KANNADA',
        body: LOREM,
        // Put a file in /public and set e.g. image: '/projects/kannada.png'
        // (the grey box from the design shows until you do).
        image: null,
        imageAlt: '',
        href: null,
      },
    ],
  },
  contact: {
    heading: 'GET IN TOUCH!',
    // TODO: replace these placeholders with your real links.
    email: 'hello@example.com',
    github: 'https://github.com/your-handle',
    linkedin: 'https://www.linkedin.com/in/your-handle',
  },
};
