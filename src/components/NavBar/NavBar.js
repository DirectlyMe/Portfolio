import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class NavBar extends Component {
  render() {
    const { imageSrc, name } = this.props;
    return (
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
          <li style={{ paddingRight: "2em" }}><Link to="/" style={{ textDecoration: "none", color: "black" }}>Work</Link></li>
          <li style={{ paddingRight: "3em " }}><Link to="/about" style={{ textDecoration: "none", color: "black" }}>About</Link></li>
        </div>
      </nav>
    );
  }
}

export default NavBar;
