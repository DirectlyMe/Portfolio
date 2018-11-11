import React, { Component } from "react";
import MediaQuery from "react-responsive";
import AppScreensPanel from "../components/AppScreensPanel/AppScreensPanel";
import AppFeaturesPanel from "../components/AppFeaturesPanel/AppFeaturesPanel";
import ProjectListMobile from "../components/ProjectListMobile";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    let image =
      "https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b8b832644f46361bc52ad70b4ad77313&auto=format&fit=crop&w=1351&q=80";
    this.state = {
      activeProject: {
        name: "Spots",
        features: [
          "Keep track of you favorite locations",
          "Share locations with friends",
          "Build a community"
        ],
        technologies: [
          {
            name: "Java",
            color: "7EB14F"
          },
          {
            name: "Android",
            color: "E3FFF7"
          },
          {
            name: "Firebase",
            color: "FF9F37"
          }
        ],
        github: "https://www.github.com/DirectlyMe/Spots",
        screenShots: [image, image, image, image]
      },
      projects: [
        {
          name: "RutaLocura",
          features: [
            "Ecommerce app for small business",
            "Integrated with paypal",
            "Raw javascript, html, css, and jquery"
          ],
          technologies: [
            {
              name: "Javascript",
              color: "7EB14F"
            },
            {
              name: "HTML",
              color: "E3FFF7"
            },
            {
              name: "CSS",
              color: "FF9F37"
            },
            {
              name: "Jquery",
              color: "00D4E3"
            }
          ],
          github: "https://www.github.com/DirectlyMe/rutalocura",
          screenShots: [image, image, image, image]
        },
        {
          name: "Spots",
          features: [
            "Keep track of you favorite locations",
            "Share locations with friends",
            "Build a community"
          ],
          technologies: [
            {
              name: "Java",
              color: "7EB14F"
            },
            {
              name: "Android",
              color: "E3FFF7"
            },
            {
              name: "Firebase",
              color: "FF9F37"
            }
          ],
          github: "https://www.github.com/DirectlyMe/Spots",
          screenShots: [image, image, image, image]
        },
        {
          name: "CryptoWatch",
          features: [
            "Use machine learning to predict crypto prices",
            "Set price alerts on currencies",
            "Purchase cryto currencies directly from app",
            "Authenticate with google for extra security"
          ],
          technologies: [
            {
              name: "Swift",
              color: "7EB14F"
            },
            {
              name: "IOS",
              color: "E3FFF7"
            },
            {
              name: "Node",
              color: "FF9F37"
            },
            {
              name: "Express",
              color: "00D4E3"
            }
          ],
          github: "https://www.github.com/DirectlyMe/crypto_watch_ios",
          screenShots: [image, image, image, image]
        },
        {
          name: "KelseyLovesArt",
          features: [
            "Ecommerce art site, mobile first and reponsive",
            "Integrated with stripe for online payments",
            "Clean, minimalistic style"
          ],
          technologies: [
            {
              name: "React",
              color: "7EB14F"
            },
            {
              name: "Node",
              color: "E3FFF7"
            },
            {
              name: "Express",
              color: "FF9F37"
            }
          ],
          github: "https://www.github.com/DirectlyMe/ArtSite",
          screenShots: [image, image, image, image]
        }
      ]
    };
  }

  setActiveProject = project => {
    this.setState({ activeProject: project });
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
            />
            <AppFeaturesPanel activeProject={this.state.activeProject} />
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
