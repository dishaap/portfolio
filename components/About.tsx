import Image from "next/image";
import profile from "../public/profile.jpeg";

const AboutSection: React.FC = () => (
  <section className="about relative h-[120vh] flex flex-col overflow-hidden">
    <h2 className="text-4xl font-bold text-white">about me</h2>

    <div className="mt-[5vh] grid grid-cols-7 items-start gap-x-[4vh]" id="about">
      <div className="relative col-span-2">
        <AboutPicture />
      </div>
      <div className="relative col-span-3">
        <AboutDesc />
      </div>
      <div className="relative col-span-2">
        <AboutFacts />
      </div>
    </div>
  </section >
);

const AboutDesc: React.FC = () => (
  <div className="liquidGlass-wrapper about-section">
    <div className="liquidGlass-tint"></div>
    <div className="liquidGlass-effect"></div>
    <div className="liquidGlass-shine"></div>
    <div className="liquidGlass-text about-text" style={{ textAlign: 'justify' }}>
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
  <div className="liquidGlass-wrapper about-facts">
    <div className="liquidGlass-tint-about"></div>
    <div className="liquidGlass-effect"></div>
    <div className="liquidGlass-shine"></div>
    <div className="liquidGlass-text" style={{ textAlign: 'justify', padding: '2vh 2vw' }}>
      <p><i className="las la-laptop-code" style={{ fontSize: '1.5rem' }}></i> 2 years as a full stack software dev</p>
      <br />
      <p><i className="las la-graduation-cap" style={{ fontSize: '1.5rem' }}></i> ubc cognitive systems graduate</p>
      <br />
      <p><i className="las la-globe" style={{ fontSize: '1.5rem' }}></i>metro vancouver, bc, canada</p>
    </div>
  </div>
)

const AboutPicture: React.FC = () => (
  <div className="liquidGlass-wrapper" style={{ 'borderRadius': '26px' }}>
    <div className="liquidGlass-shine"></div>
    <Image src={profile} alt="me!" style={{ width: '30vw', borderRadius: '26px' }} />
  </div>
);



export default AboutSection;