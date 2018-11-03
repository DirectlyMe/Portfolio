import React from "react";

const AppScreenShot = ({ width, height, imageSrc, padding }) => {
  return (
    <img alt="App screenshot" src={imageSrc} width={width} height={height} style={{ padding: padding }} />
  );
};

export default AppScreenShot;
