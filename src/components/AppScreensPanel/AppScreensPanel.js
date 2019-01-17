import React, { Component } from "react";
import classNames from "classnames";
import { projectTypes } from "../../ProjectsData";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
import { ReactComponent as YellowCircle } from "../../svgs/YellowCircle.svg";
import "./styles.scss";

class AppScreensPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ deselected: this.props.deselected });
    }
  }

  render() {
    const { activeProject } = this.props;

    return (
      <div className="app-screenshots-panel" style={{ height: this.state.height }}>
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
            selectProjectFunc={this.props.selectProject}
          />
        </div>
        {activeProject.type === projectTypes.app ? (
          <div
            key={activeProject.name}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              zIndex: 7
            }}
            className={classNames({
              ["screen-shots-incoming"]: !this.props.deselected, // eslint-disable-line
              ["screen-shots-departing"]: this.props.deselected // eslint-disable-line
            })}
          >
            <img
              height={this.state.height - this.state.height * 0.3}
              className="app-screenshots--large-image"
              src={activeProject.screenShots[0]}
              alt="App screen"
            />
            <div
              className="app-screenshots--small-images-column"
            >
              <img
                height={this.state.height - this.state.height * 0.63}
                width="100%"
                style={{ borderRadius: "15px", marginBottom: "2%" }}
                src={activeProject.screenShots[1]}
                alt="App screen"
              />
              <img
                height={this.state.height - this.state.height * 0.63}
                width="100%"
                style={{ borderRadius: "15px", marginTop: "2%" }}
                src={activeProject.screenShots[2]}
                alt="App screen"
              />
            </div>
            <img
              height={this.state.height - this.state.height * 0.3}
              className="app-screenshots--large-image"
              src={activeProject.screenShots[3]}
              alt="App screen"
            />
          </div>
        ) : null}
        {activeProject.type === projectTypes.web ? (
          <div
            key={activeProject.name}
            style={{
              display: "flex",
              flexDirection: "row",
              zIndex: 7
            }}
            className={classNames({
              ["screen-shots-incoming"]: !this.state.deselected, // eslint-disable-line
              ["screen-shots-departing"]: this.state.deselected // eslint-disable-line
            })}
          >
            <div style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <img
                height={this.state.height - this.state.height * 0.50}
                width="68%"
                style={{ borderRadius: "10px", marginRight: "2%", marginLeft: "2%", marginBottom: "8%" }}
                src={activeProject.screenShots[0]}
                alt="App screen"
              />
              <img
                height={this.state.height - this.state.height * 0.35}
                width="26%"
                style={{ borderRadius: "15px", marginTop: "2%" }}
                src={activeProject.screenShots[1]}
                alt="App screen"
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AppScreensPanel;
