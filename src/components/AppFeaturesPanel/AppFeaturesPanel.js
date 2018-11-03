import React, { Component } from "react";
import "./styles.scss";

class AppFeaturesPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
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
      <div
        className="app-features-panel"
        style={{ height: this.state.height - 72 }}
      />
    );
  }
}

export default AppFeaturesPanel;
