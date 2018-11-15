import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { ReactComponent as LrgCircle } from "../svgs/AboutLrgCircle.svg";
import { ReactComponent as MedCircle } from "../svgs/AboutMedCircle.svg";
import { ReactComponent as SmlCircle } from "../svgs/AboutSmlCircle.svg";
import { ReactComponent as SmllestCircle } from "../svgs/AboutSmlestCircle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/fontawesome-free-brands";
import "./AboutStyles.scss";

class AboutScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    return (
      <div>
        <MediaQuery query="(min-width: 900px)">
          <div
            style={{
              backgroundColor: "#FFC95F",
              height: this.state.height - 70
            }}
          >
            <div
              style={{
                zIndex: 2,
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginRight: "10%"
              }}
              className="about"
            >
              <img
                alt="Me"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a723711f2c79ac1dc3c8718d82850f30&auto=format&fit=crop&w=1931&q=80"
                width="450px"
                height="450px"
                style={{
                  borderRadius: "50%",
                  marginTop: "10%",
                  marginLeft: "4%"
                }}
              />
              <div style={{ marginTop: "8%", fontSize: "26px" }}>
                <p>Hi there,</p>
                <p
                  style={{ marginLeft: "5%", marginTop: "-1%", width: "22em" }}
                >
                  Thanks for taking the time to check out my porfolio.
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "4%",
                    marginTop: "-2%"
                  }}
                >
                  - About me -
                </p>
                <ul
                  style={{
                    marginLeft: "2%",
                    marginTop: "-5%",
                    textAlign: "center"
                  }}
                >
                  <li>
                    I’m primarily a mobile developer, with <br /> experience in
                    web, android, and ios.
                  </li>
                  <li style={{ marginLeft: "2%", marginTop: "-6%" }}>
                    I’m currently pursuing a bachelors in <br /> computer
                    science with a minor in design.
                  </li>
                </ul>
                <div style={{ textAlign: "center", marginLeft: "6%" }}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    style={{ marginRight: "1em" }}
                  />
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </div>
              </div>
            </div>
            <div
              key={this.state.height}
              style={{
                display: "flex",
                flexDirection: "column",
                zIndex: 1
              }}
            >
              <LrgCircle
                className="large-bubble"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "11%"
                }}
              />
              <MedCircle
                className="medium-bubble"
                style={{
                  position: "absolute",
                  right: 80,
                  top: "42%"
                }}
              />
              <SmlCircle
                className="small-bubble"
                style={{
                  position: "absolute",
                  right: 95,
                  top: "63%"
                }}
              />
              <SmllestCircle
                className="smallest-bubble"
                style={{
                  position: "absolute",
                  right: 78,
                  top: "78%"
                }}
              />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 499px)">
          <div className="about-wrapper">
            <div style={{ display: "flex", justifyContent: "center"}}>
              <img
                alt="Me"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a723711f2c79ac1dc3c8718d82850f30&auto=format&fit=crop&w=1931&q=80"
                width="350px"
                height="350px"
                style={{
                  borderRadius: "50%",
                  marginTop: "5%",
                  justifyContent: "center"
                }}
              />
            </div>
            <div
              style={{
                fontSize: "21px",
                fontWeight: "bold",
                width: "95%",
                justifyContent: "center"
              }}
            >
              <p style={{ marginLeft: "6%" }}>Hi there,</p>
              <p style={{ marginTop: "-1%", marginLeft: "6%" }}>
                Thanks for taking the time to check out my porfolio.
              </p>
              <p
                style={{
                  textAlign: "center", marginLeft: "4%"
                }}
              >
                - About me -
              </p>
              <ul
                style={{
                  marginTop: "-5%"
                }}
              >
                <li>
                  I’m primarily a mobile developer, with  experience in
                  web, android, and ios.
                </li>
                <li style={{ marginTop: "-6%" }}>
                  I’m currently pursuing a bachelors in computer science
                  with a minor in design.
                </li>
              </ul>
              <div
                style={{
                  textAlign: "center",
                  marginLeft: "3%",
                  paddingBottom: "8%"
                }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ marginRight: "1em" }}
                />
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default AboutScreen;
