import React from "react";

interface NavItemProps {
  title: string;
  link: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, link }) => {
  return (
    <a href={link} className="navbar-item">
      {title}
    </a>
  );
};

const NavBar: React.FC = () => {
  return (
    <div className="liquidGlass-wrapper navbar">
      <div className="liquidGlass-effect"></div>
      <div className="liquidGlass-tint"></div>
      <div className="liquidGlass-shine"></div>
      <div className="liquidGlass-text">
        <NavItem title="home" link="#home" />
        <NavItem title="about" link="#about" />
        <NavItem title="projects" link="/" />
        <NavItem title="get in touch" link="/" />
        <NavItem title="github" link="/" />
      </div>
    </div>
  );
};

export default NavBar;
