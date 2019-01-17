import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import classnames from "classnames";
import Tag from "../Tag";
import { ReactComponent as BlueCircle } from "../../svgs/BlueCircle.svg";
import { ReactComponent as WhiteCircle } from "../../svgs/WhiteCircle.svg";
import "./styles.scss";

class AppFeaturesPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      deselected: false
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ deselected: this.props.deselected });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    const { name, features, technologies, github } = this.props.activeProject;
    const featureList = features.map(feature => <li key={feature}>{feature}</li>);

    const techList = technologies.map((technology, index) => (
      <Tag key={index} text={technology.name} color={technology.color} />
    ));

    return (
      <div
        className="app-features-panel"
        style={{
          height: this.state.height,
          display: "flex"
        }}
      >
        <div
          key={name}
          className={classnames({
            ["app-details-incoming"]: !this.props.deselected, // eslint-disable-line
            ["app-details-outgoing"]: this.props.deselected // eslint-disable-line
          })}
        >
          <div
            style={{
              marginTop: "2%",
              textAlign: "center",
              fontSize: "36px",
              fontWeight: "400"
            }}
          >
            {name}
          </div>
          <ul
            style={{
              marginTop: "5%",
              marginBottom: "5%",
              marginRight: "2.2em",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "300"
            }}
          >
            {featureList}
          </ul>
          <a
            style={{
              marginLeft: "47%",
              color: "black"
            }}
            href={github}
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <ul
            style={{
              marginTop: "20%",
              marginRight: ".3em",
              paddingBottom: "5px",
              textAlign: "center"
            }}
          >
            {techList}
          </ul>
        </div>
        <WhiteCircle
          style={{
            position: "absolute",
            left: "-225px",
            bottom: "8%",
            zIndex: "4"
          }}
        />
        <BlueCircle
          style={{
            position: "absolute",
            right: "-130px",
            bottom: "-130px",
            zIndex: "4"
          }}
        />
      </div>
    );
  }
}

export default AppFeaturesPanel;
