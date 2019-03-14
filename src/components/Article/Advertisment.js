import React from "react";

import {
  AdvertismentWrapper,
  Advertising,
  AdvertismentPicture,
  AdvertiseWithUs
} from "../styled";

export default () => (
  <AdvertismentWrapper>
    <Advertising center>- advertising -</Advertising>
    <AdvertismentPicture />
    <Advertising marginLeft>300x450 ad</Advertising>
    <AdvertiseWithUs>Advertise with us</AdvertiseWithUs>
  </AdvertismentWrapper>
);
