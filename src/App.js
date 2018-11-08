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
          imageSrc="https://images.unsplash.com/photo-1489779162738-f81aed9b0a25?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b56cc98130be8cfdaf1f7a1fed8142dc&auto=format&fit=crop&w=1382&q=80"
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
