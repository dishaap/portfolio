export default function About({ content }) {
  return (
    <section className="page page--about">
      <div className="about__intro">
        <h1 className="heading">{content.heading}</h1>
        <p className="body-lg">{content.body}</p>
      </div>

      <ol className="timeline">
        {content.timeline.map((item) => (
          <li className="timeline__item" key={item.title}>
            <span className="timeline__dot" aria-hidden="true" />
            <h2 className="timeline__title">{item.title}</h2>
            <p className="timeline__meta">{item.meta}</p>
            <p className="timeline__body">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
