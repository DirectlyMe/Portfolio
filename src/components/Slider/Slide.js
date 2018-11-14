import React from "react";
import "./styles.scss";

const Slide = ({ image }) => {
  return (
    <div
      className="slide"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }}
    />
  );
};

export default Slide;
