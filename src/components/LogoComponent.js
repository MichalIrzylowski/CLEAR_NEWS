import React from "react";
import { LogoWrapper, BlueBall, HeroLogo, SubLogo } from "./styled";

export default () => {
  return (
    <LogoWrapper>
      <span>
        <BlueBall /> <HeroLogo>Clear</HeroLogo>
        <SubLogo>news</SubLogo>
      </span>
    </LogoWrapper>
  );
};
