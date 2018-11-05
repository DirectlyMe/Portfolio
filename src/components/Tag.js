import React from 'react';

const Tag = ({ color, text }) => (
  <li style={{
    width: "15px",
    backgroundColor: `#${color}`,
    boxSizing: "border-box",
    border: "1px solid",
    fontSize: "12px",
    display: "inline",
    borderRadius: "20px",
    padding: "1em",
    margin: ".5em"
  }}>{text}</li>
);

export default Tag;