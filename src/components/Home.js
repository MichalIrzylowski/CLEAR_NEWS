import React, { Component } from "react";
import Slider from "./Slider";
import LatestStories from "./LatestStories";

class Home extends Component {
  render() {
    return (
      <>
        <Slider />
        <LatestStories />
      </>
    );
  }
}

export default Home;
