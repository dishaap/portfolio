const AboutSection: React.FC = () => (
  <section className="about relative h-[120vh] flex flex-col overflow-hidden">
    <h2 className="text-4xl font-bold text-white">about me</h2>

    <div className="flex flex-row">
      <div>
        <div className="relative m-2">
          <AboutDesc />
        </div>
      </div>

      <div>
        <div className="justify-center relative m-2">
          <AboutDesc />
        </div>
      </div>
    </div>
  </section>
);

const AboutDesc: React.FC = () => (
  <div className="liquidGlass-wrapper about-section">
    <div className="liquidGlass-tint"></div>
    <div className="liquidGlass-shine"></div>
    <div className="liquidGlass-text">
      <p>Hey! I’m Disha :)</p>
      <br />
      <p>I am passionate about computational linguistics, particularly in how machine learning can be used create technologies to support learning for low-resource languages.</p>
      <p>I also really love video gaming, especially indie games :D </p>
      <p>I’m currently looking for full-stack developer roles.</p>
      <p>2 years as a full stack software dev</p>
      <p>ubc cognitive systems graduate</p>
      <p>metro vancouver, bc, canada</p>
    </div>
  </div>
);

export default AboutSection;