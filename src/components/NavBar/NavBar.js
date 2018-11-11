import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import "./styles.scss";

const NavBar = ({ imageSrc, name }) => {
  return (
    <div>
      <MediaQuery query="(min-width: 500px)">
        <nav className="navbar">
          <div className="profileItems">
            <img
              src={imageSrc}
              style={{
                borderRadius: "50%",
                height: "65px",
                width: "65px",
                marginLeft: "1em"
              }}
              alt="Me"
            />
            <div
              style={{
                paddingTop: "20px",
                paddingLeft: "1em"
              }}
            >
              {name}
            </div>
          </div>
          <div className="navigationButtons">
            <li style={{ paddingRight: "2em" }}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Work
              </Link>
            </li>
            <li style={{ paddingRight: "3em " }}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </li>
          </div>
        </nav>
      </MediaQuery>
      <MediaQuery query="(max-width: 499px)">
        <nav className="navbar">
          <div className="profileItems">
            <div
              style={{
                paddingTop: "20px",
                paddingLeft: "1em"
              }}
            >
              {name}
            </div>
          </div>
          <div className="navigationButtons">
            <li style={{ paddingRight: "1em" }}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Work
              </Link>
            </li>
            <li style={{ paddingRight: "1em " }}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </li>
          </div>
        </nav>
      </MediaQuery>
    </div>
  );
};

export default NavBar;
