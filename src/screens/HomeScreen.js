import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { projects } from "../ProjectsData";
import AppScreensPanel from "../components/AppScreensPanel/AppScreensPanel";
import AppFeaturesPanel from "../components/AppFeaturesPanel/AppFeaturesPanel";
import ProjectListMobile from "../components/ProjectListMobile";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: projects[0],
      projects: projects,
      deselected: false
    };
  }

  setActiveProject = project => {
    this.setState({ deselected: true });
    setTimeout(() => {
      this.setState({ activeProject: project });
      this.setState({ deselected: false });
    }, 900);
  };

  render() {
    return (
      <div>
        <MediaQuery query="(min-width: 900px)">
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <AppScreensPanel
              projectList={this.state.projects}
              activeProject={this.state.activeProject}
              selectProject={this.setActiveProject}
              deselected={this.state.deselected}
            />
            <AppFeaturesPanel
              activeProject={this.state.activeProject}
              deselected={this.state.deselected}
            />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 600px)">
          <ProjectListMobile projects={this.state.projects} />
        </MediaQuery>
      </div>
    );
  }
}

export default HomeScreen;
