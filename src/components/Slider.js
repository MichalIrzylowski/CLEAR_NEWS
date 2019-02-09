import React, { Component } from "react";
import { Slider, SliderRightArrow } from "./styled";

import Arrow from "../images/arrow.png";

export default class MainSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Slider>
        <SliderRightArrow src={Arrow} />
      </Slider>
    );
  }
}
