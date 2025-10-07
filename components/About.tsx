import Image from "next/image";
import profile from "../public/profile.jpeg";

const AboutSection: React.FC = () => (
  <section className="about relative min-h-[120vh] flex flex-col overflow-hidden">
    <h2>about me</h2>

    <div className="mt-[10vh] grid grid-cols-6 items-start gap-x-[7vw]" id="about">
      <div className="col-span-2">
        <div className="relative"><AboutPicture /></div>
        <div className="relative"><AboutFacts /></div>
      </div>
      <div className="relative col-span-4">
        <AboutDesc />
      </div>
    </div>
  </section >
);

const AboutDesc: React.FC = () => (
  <div className="about-section">
    <div className="about-text" style={{ textAlign: 'justify' }}>
      <p>hey! i’m disha :)</p>
      <br />
      <p>i am passionate about computational linguistics, particularly in how machine learning can be used create technologies to support learning for low-resource languages.</p>
      <br />
      <p>i also really love video gaming, especially indie games :D </p>
      <br />
      <p>i’m currently looking for full-stack developer roles.</p>
    </div>
  </div>
);

const AboutFacts: React.FC = () => (
  <div className="liquidGlass-wrapper-about-facts">
    <div className="liquidGlass-tint-about"></div>
    <div className="liquidGlass-effect-about"></div>
    <div className="liquidGlass-shine-about"></div>

    <div className="liquidGlass-text" style={{ padding: '5vh 2vw' }}>
      <p><i className="las la-laptop-code" style={{ fontSize: '1.4rem' }}></i> 2 years as a full stack software dev</p>
      <br />
      <p><i className="las la-graduation-cap" style={{ fontSize: '1.4rem' }}></i> ubc cognitive systems graduate</p>
      <br />
      <p><i className="las la-globe" style={{ fontSize: '1.4rem' }}></i> metro vancouver, bc, canada</p>
    </div>
  </div>
)

const AboutPicture: React.FC = () => (
  <div className="liquidGlass-wrapper" style={{ 'borderTopLeftRadius': '26px', 'borderTopRightRadius': '26px', borderBottom: '0%', borderBottomLeftRadius: '0%', borderBottomRightRadius: '0%' }}>
    <div className="liquidGlass-shine" style={{ 'borderTopLeftRadius': '26px', 'borderTopRightRadius': '26px', borderBottomLeftRadius: '0%', borderBottomRightRadius: '0%' }}></div>
    <Image src={profile} alt="me!" style={{ 'borderTopLeftRadius': '26px', 'borderTopRightRadius': '26px' }} />
  </div>
);



export default AboutSection;