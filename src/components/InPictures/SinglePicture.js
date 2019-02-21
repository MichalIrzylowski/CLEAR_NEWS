import React from "react";

import imageSign from "../../images/imageSign.png";

import { InPicturePicture, InPictureWrapper, InPictureHover } from "../styled";

export default ({ src, title }) => (
  <InPictureWrapper>
    <InPicturePicture src={src} title={title} />
    <InPictureHover src={imageSign} title="Image sign" />
  </InPictureWrapper>
);
