import React from "react";
import "./styles.scss";

const Slide = ({ image }) => {
  const width = window.innerWidth;

  return (
    <img
      className="slide"
      height="100%"
      width={`${width}px`}
      alt="project"
      src={image}
    />
  );
};

export default Slide;
