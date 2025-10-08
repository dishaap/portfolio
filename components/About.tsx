import Image from "next/image";
import profile from "../public/profile.jpeg";
import { WavyBackground } from "./ui/shadcn-io/wavy-background";
import GitHubCalendar from "react-github-calendar";

const AboutSection: React.FC = () => (
  <section id="about">
    <WavyBackground backgroundFill="#e65100" colors={["#ff6f00", "#FB8C00", "#ffb300"]} waveWidth={100} blur={5} speed="fast" waveOpacity={0.5}
        containerClassName="h-full w-full"
        className="about h-fit relative flex overflow-hidden flex-col items-center justify-center">
    <div className="mt-[10vh] grid grid-cols-6 items-start gap-x-[5vw] w-[80vw]">
      <div className="col-span-2">
        <div className="relative"><AboutPicture /></div>
        <div className="relative"><AboutFacts /></div>
      </div>
      <div className="relative col-span-4">
        <h2>about me</h2>
        <AboutDesc />
      </div>
    </div>
    <div className="relative grid grid-cols-6 items-start gap-x-[5vw] w-[80vw] mt-[10vh] mb-[10vh]">
      <div className="relative col-span-4">
        <GithubGrid />
        </div>
      </div>
    </WavyBackground>
  </section >
);

const AboutDesc: React.FC = () => (
  <div className="about-section">
    <div className="about-text" style={{ textAlign: 'justify' }}>
      <p>hey! i&apos;m disha :) i recently graduated with a degree in cognitive systems, computational linguistics and design. i have always had a deep interest in linguistics for most of my life, and through my degree i developed a passion for computational linguistics. for my undergraduate thesis, i explored how machine learning can be used create technologies that support low-resource languages.</p>
      <br />
      <p>i have worked in full-stack and devops during my internship and full-time roles. i have mostly worked with C#/.NET tech stacks professionally but i have dabbled in JavaScript (React/Node), NextJS/TypeScript and Python stacks as well. </p>
      <br />
      <p>i&apos;m currently looking for full-stack developer roles. i have a deep interest in AI/NLP research-based roles but i&apos;m open to anything that allows me to blend my creativity in design with building functional solutions!</p>
      <br />
      <p>when i&apos;m not coding, i love to read, hike and explore new cafes around the city :) i&apos;m also really into indie video games - my current favourites are hades 2 and silksong.</p>
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

const GithubGrid: React.FC = () => (
  <div className="liquidGlass-wrapper-about-facts">
    <div className="liquidGlass-effect-about"></div>
    <div className="liquidGlass-shine-about"></div>
      <GitHubCalendar username="dishaap" blockSize={10} blockMargin={5} fontSize={16} year={2025} />
  </div>
);



export default AboutSection;