import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar
            name="Jack Hansen"
          />
          <Route exact path="/" component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
