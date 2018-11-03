import React, { Component } from "react";
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
          <li style={{ paddingRight: "2em" }}>Work</li>
          <li style={{ paddingRight: "3em " }}>About</li>
        </div>
      </nav>
    );
  }
}

export default NavBar;
