import React from "react";

const Scroll: React.FC = () => {
  return (
    <span className="scroll">
      scroll{" "}
      <i
        className="las la-angle-double-down"
        style={{ transform: "rotate(315deg)", fontWeight: "bolder" }}
      ></i>
    </span>
  );
};

const Title: React.FC = () => {
  return (
    <div className="title">
      <div className="title-text">
        code is my <span className="title-alt-1">canvas</span> for creating with{" "}
        <span className="title-alt-2">intention.</span>
      </div>
      <Scroll />
    </div>
  );
};

const SubTitle: React.FC = () => {
  return (
    <div className="subtitle">
      <span>HI! I AM DISHA :)</span>
    </div>
  );
};

const TitleSection: React.FC = () => {
  return (
    <div className="title-section">
      <SubTitle />
      <Title />
    </div>
  );
};

export default TitleSection;