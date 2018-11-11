import React, { Component } from 'react';
import Slide from "./Slide";
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import "./styles.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,

    };
  }

  goToPrevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    return (
      <div style={{ height: "412px"}}>
        <Slide />
        <RightArrow nextSlideFunc={this.goToNextSlide} />
        <LeftArrow prevSlideFunc={this.goToPrevSlide} />
      </div>
    );
  }
}

export default Slider;
