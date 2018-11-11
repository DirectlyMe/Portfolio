import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../Slider/Slider";
import Tag from "../Tag";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import "./styles.scss";

class ProjectMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      project: this.props.project
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.project !== prevProps.project) {
      this.setState({ project: this.props.project });
    }
  }

  render() {
    const { name, features, technologies, github, images } = this.state.project;

    const appFeatures = features.map(feature => (
      <li key={feature} style={{ padding: ".7em" }}>
        {feature}
      </li>
    ));
    const techList = technologies.map(technology => (
      <Tag
        key={technology.name}
        text={technology.name}
        color={technology.color}
      />
    ));

    if (!this.state.showMore) {
      return (
        <div
          className="app-showcase"
          style={{ backgroundColor: `#${this.props.backgroundColor}` }}
        >
          <div
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "2%"
            }}
          >
            {name}
          </div>
          <ul className="app-features">{appFeatures}</ul>
          <a
            style={{
              marginLeft: "44%",
              color: "black"
            }}
            href={github}
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <ul
            style={{
              marginTop: "10%",
              marginRight: "8%",
              marginBottom: "4%",
              textAlign: "center"
            }}
          >
            {techList}
          </ul>
          <div
            style={{ fontSize: "22px", padding: ".5em", textAlign: "center" }}
            onClick={() => {
              this.setState(prevState => ({ showMore: !prevState.showMore }));
            }}
          >
            Images
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div
            className="app-showcase"
            style={{ backgroundColor: `#${this.props.backgroundColor}` }}
          >
            <div
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "2%"
              }}
            >
              {name}
            </div>
            <ul className="app-features">{appFeatures}</ul>
            <a
              style={{
                marginLeft: "44%",
                color: "black"
              }}
              href={github}
            >
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <ul
              style={{
                marginTop: "10%",
                marginRight: "8%",
                marginBottom: "4%",
                textAlign: "center"
              }}
            >
              {techList}
            </ul>
            <div
              style={{ fontSize: "22px", padding: ".5em", textAlign: "center" }}
              onClick={() => {
                this.setState(prevState => ({ showMore: !prevState.showMore }));
              }}
            >
              Images
            </div>
          </div>
          <div className="app-images">
            <Slider images={images} />
          </div>
        </div>
      );
    }
  }
}

export default ProjectMobile;
