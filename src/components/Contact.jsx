import { MdMarkEmailUnread } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact({ content }) {
  return (
    <section className="page page--contact">
      <div className="contact__block">
        <h1 className="heading">{content.heading}</h1>
        <div className="contact__links">
          <a href={content.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon icon--sm">
            <FaGithub />
          </a>
          <a href={`mailto:${content.email}`} aria-label="Email" className="icon">
            <MdMarkEmailUnread />
          </a>
          <a href={content.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
