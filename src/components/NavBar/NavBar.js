import React, { Component } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import classNames from "classnames";
import "./styles.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutSelected: false,
      workSelected: false
    };
  }

  componentDidMount() {
    this.highlightRoute();
  }

  highlightRoute = () => {
    if (window.location.pathname === "/") {
      this.setState({ workSelected: true, aboutSelected: false });
    } else if (window.location.pathname === "/about") {
      this.setState({ aboutSelected: true, workSelected: false });
    }
    console.log(window.location.pathname);
  };

  render() {
    const { imageSrc, name } = this.props;

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
                  paddingLeft: "1em",
                  marginTop: "12px"
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
          <nav
            className={classNames(["navbar"], {
              // determines style of the navbar depending on the page
              ["navbar-work"]: this.state.workSelected, // eslint-disable-line
              ["navbar-about"]: this.state.aboutSelected // eslint-disable-line
            })}
          >
            <div className="profileItems">
              <div
                style={{
                  paddingLeft: "1em"
                }}
              >
                {name}
              </div>
            </div>
            <div className="navigationButtons">
              <li style={{ marginRight: ".3em" }} onClick={this.highlightRoute}>
                <Link
                  to="/"
                  className={classNames(["nav-button"], {
                    ["highlight-route"]: this.state.workSelected // eslint-disable-line
                  })}
                >
                  Work
                </Link>
              </li>
              <li
                style={{ marginRight: ".3em " }}
                onClick={this.highlightRoute}
              >
                <Link
                  to="/about"
                  className={classNames(["nav-button"], {
                    ["highlight-route"]: this.state.aboutSelected // eslint-disable-line
                  })}
                >
                  About
                </Link>
              </li>
            </div>
          </nav>
        </MediaQuery>
      </div>
    );
  }
}

export default NavBar;
