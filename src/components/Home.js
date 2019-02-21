import React, { Component } from "react";
import Slider from "./Slider";
import LatestStories from "./LatestStories";
import InPictures from "./InPictures";
import BottomCategories from "./BottomCategories";

class Home extends Component {
  render() {
    return (
      <>
        <Slider />
        <LatestStories />
        <InPictures />
        <BottomCategories />
      </>
    );
  }
}

export default Home;
