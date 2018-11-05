import React, { Component } from "react";
import classNames from "classnames";
import "./styles.scss";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
import { ReactComponent as YellowCircle } from "../../svgs/YellowCircle.svg";

class AppScreensPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deselected: false,
      height: 0,
      width: 0,
      activeProject: this.props.activeProject,
      projects: this.props.projectList
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

  projectSelected = name => {
    this.setState({ deselected: true });
    this.props.selectProject(name);
    setTimeout(() => {
      this.setState({ deselected: false });
    }, 1000);
  };

  render() {
    const { activeProject } = this.props;

    return (
      <div
        className="app-screenshots-panel"
        style={{ height: this.state.height - 70 }}
      >
        <YellowCircle
          style={{
            left: "-140px",
            top: "-130px",
            zIndex: 6,
            position: "absolute"
          }}
        />
        <div style={{ display: "flex", justifyContent: "center", zIndex: 7 }}>
          <ProjectTabs
            projects={this.state.projects}
            activeProject={activeProject}
            selectProjectFunc={this.projectSelected}
          />
        </div>
        <div
          key={activeProject.name}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            zIndex: 7
          }}
          className={classNames({
            ["screen-shots-incoming"]: !this.state.deselected,
            ["screen-shots-departing"]: this.state.deselected
          })}
        >
          <img
            height={this.state.height - this.state.height * 0.3}
            width="30%"
            style={{ borderRadius: "20px", marginTop: "1em" }}
            src={activeProject.screenShots[0]}
            alt="App screen"
          />
          <div
            style={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              height={this.state.height - this.state.height * 0.65}
              width="100%"
              style={{ borderRadius: "20px" }}
              src={activeProject.screenShots[1]}
              alt="App screen"
            />
            <img
              height={this.state.height - this.state.height * 0.65}
              width="100%"
              style={{ marginTop: "2em", borderRadius: "20px" }}
              src={activeProject.screenShots[2]}
              alt="App screen"
            />
          </div>
          <img
            height={this.state.height - this.state.height * 0.3}
            width="30%"
            style={{ borderRadius: "20px", marginTop: "1em" }}
            src={activeProject.screenShots[3]}
            alt="App screen"
          />
        </div>
      </div>
    );
  }
}

export default AppScreensPanel;
