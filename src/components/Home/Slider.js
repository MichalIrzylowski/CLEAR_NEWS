import React, { Component } from "react";
import {
  Slider,
  SliderRightArrow,
  Abstract,
  Author,
  AbstractContent
} from "../styled";

import Arrow from "../../images/arrow.png";

export default class MainSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Slider>
        <SliderRightArrow src={Arrow} />
        <Abstract>
          <Author>By Clark Kent</Author>
          <AbstractContent>
            Ladies others the six desire age. Bred am soon park past read by
            lain. As excuse eldest no moment.
          </AbstractContent>
        </Abstract>
      </Slider>
    );
  }
}
