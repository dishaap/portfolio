// All editable portfolio content lives here. Colors come from the Figma palette.

export const COLOR1 = '#efc692';
export const COLOR2 = '#b7734e';
export const COLOR3 = '#852d2c';
export const COLOR4 = '#483e3c';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus mollis mauris quis consectetur. In hac habitasse platea dictumst. In magna massa, malesuada id pretium at, dapibus sed ante.';
const LOREM_LONG = `${LOREM} Aliquam sed sapien id diam elementum maximus id id diam. Pellentesque elit turpis, blandit eget blandit et, porta sed est.`;

export const PAGES = [
  { id: 'home', label: 'HOME', bg: COLOR1, ink: COLOR4 },
  { id: 'about', label: 'ABOUT ME', bg: COLOR2, ink: COLOR3 },
  { id: 'projects', label: 'PROJECTS', bg: COLOR3, ink: COLOR2 },
  { id: 'contact', label: 'GET IN TOUCH', bg: COLOR4, ink: COLOR1 },
];

export const CONTENT = {
  name: 'Disha',
  home: {
    heading: 'HI, I’M DISHA :)',
    body: 'I’m a full-stack developer and product manager who has built language-learning tools and an indie game. These days, I’m focused on making AI tools more accessible and equitable, working across both policy research and hands-on development. I have always loved being unconventional and experimental, whether it’s in my career or while choosing my morning coffee.',
  },
  about: {
    heading: 'ABOUT ME',
    location: 'Bengaluru, India',
    languages: 'English, Kannada, Hindi, German',
    timeline: [
      {
        title: 'FREELANCER',
        meta: 'JUN 2026 - PRESENT',
        body: 'Contributing to game development from previous full-time role on an on-demand basis. Building a language education application JnaanaJyoti for adult learners of Kannada.',
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
