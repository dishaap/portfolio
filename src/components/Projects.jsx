import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export default function Projects({ content }) {
  const [i, setI] = useState(0);
  const count = content.items.length;
  const project = content.items[i];
  const go = (step) => setI((n) => (n + step + count) % count);

  return (
    <section className="page page--projects">
      <div className="projects__layout">
        <div className="projects__text">
          <h2 className="projects__title">{project.title}</h2>
          <p className="projects__body">{project.body}</p>
        </div>

        <div className="projects__media">
          <h1 className="heading">{content.heading}</h1>
          <div className="projects__frame">
            {project.image ? (
              <img src={project.image} alt={project.imageAlt} />
            ) : null}
            {count > 1 && (
              <div className="projects__nav">
                <button type="button" onClick={() => go(-1)} aria-label="Previous project">
                  <MdKeyboardArrowUp />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next project">
                  <MdKeyboardArrowDown />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
