import React, { Component } from "react";
import Navbar from "../components/NavBar/NavBar";
import AppScreensPanel from "../components/AppScreensPanel/AppScreensPanel";
import AppFeaturesPanel from "../components/AppFeaturesPanel/AppFeaturesPanel";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Navbar
          imageSrc="https://images.unsplash.com/photo-1489779162738-f81aed9b0a25?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b56cc98130be8cfdaf1f7a1fed8142dc&auto=format&fit=crop&w=1382&q=80"
          name="Jack Hansen"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <AppScreensPanel />
          <AppFeaturesPanel />
        </div>
      </div>
    );
  }
}

export default HomeScreen;
