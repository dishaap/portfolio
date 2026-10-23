import { useEffect, useState } from 'react';
import { PAGES, CONTENT } from './data/content.js';
import Tab from './components/Tab.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

const VIEWS = { home: Home, about: About, projects: Projects, contact: Contact };

function readIndex() {
  const i = PAGES.findIndex((p) => `#${p.id}` === window.location.hash);
  return i < 0 ? 0 : i;
}

function usePageIndex() {
  const [index, setIndex] = useState(readIndex);
  useEffect(() => {
    const onHash = () => {
      setIndex(readIndex());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return index;
}

export default function App() {
  const index = usePageIndex();
  const page = PAGES[index];
  const View = VIEWS[page.id];
  // Pages before the active one stack on the left, pages after it on the right.
  const side = index <= 1 ? 'left' : 'right';

  useEffect(() => {
    document.title = `${CONTENT.name} — ${page.label.charAt(0) + page.label.slice(1).toLowerCase()}`;
  }, [page]);

  return (
    <div className="stage" style={{ '--bg': page.bg, '--ink': page.ink }} data-page={page.id}>
      {PAGES.slice(0, index).map((p, i) => (
        <Tab key={p.id} page={p} number={i + 1} />
      ))}

      <main className="canvas" id="main">
        <View key={page.id} content={CONTENT[page.id]} />
        <div className={`badge badge--${side}`} aria-hidden="true">
          <span>{index + 1}</span>
        </div>
      </main>

      {PAGES.slice(index + 1).map((p, i) => (
        <Tab key={p.id} page={p} number={index + i + 2} />
      ))}

      <nav className="mobile-nav" aria-label="Sections">
        {PAGES.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            aria-current={p.id === page.id ? 'page' : undefined}
            style={{ '--tab-bg': p.bg, '--tab-ink': p.ink }}
          >
            {p.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
