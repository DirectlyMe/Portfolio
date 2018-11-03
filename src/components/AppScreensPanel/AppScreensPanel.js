import React, { Component } from "react";
import "./styles.scss";
import ProjectTabs from "../ProjectTabs/ProjectTabs";
import ScreenShot from "../AppScreenShot";

class AppScreensPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      projects: ["CryptoWatch", "Spots", "KelseyLovesArt"]
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  selectProject = () => {
    console.log("project tab clicked");
  };

  render() {
    return (
      <div
        className="app-screenshots-panel"
        style={{ height: this.state.height - 72 }}
      >
        <ProjectTabs
          projectItems={this.state.projects}
          selectProjectFunc={this.selectProject}
        />
        <div
          style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}
        >
          <ScreenShot
            height={this.state.height - 300}
            width={350}
            padding={10}
            imageSrc="https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b8b832644f46361bc52ad70b4ad77313&auto=format&fit=crop&w=1351&q=80"
          />
          <div style={{ display: "flex", flexDirection: "column"}}>
            <ScreenShot height={this.state.height - 700} width={350} padding={25} imageSrc="https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b8b832644f46361bc52ad70b4ad77313&auto=format&fit=crop&w=1351&q=80"/>
            <ScreenShot height={this.state.height - 700} width={350} padding={25} imageSrc="https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b8b832644f46361bc52ad70b4ad77313&auto=format&fit=crop&w=1351&q=80"/>
          </div>
          <ScreenShot
            height={this.state.height - 300}
            width={350}
            padding={10}
            imageSrc="https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b8b832644f46361bc52ad70b4ad77313&auto=format&fit=crop&w=1351&q=80"
          />
        </div>
      </div>
    );
  }
}

export default AppScreensPanel;
