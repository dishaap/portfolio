export default function Home({ content }) {
  return (
    <section className="page page--home">
      <div className="home__block">
        <h1 className="heading">{content.heading}</h1>
        <p className="body-lg">{content.body}</p>
      </div>
    </section>
  );
}
