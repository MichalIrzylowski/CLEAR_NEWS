import React from "react";
import LogoComponent from "./LogoComponent";
import LeftMenu from "./header_footer_menus/LeftMenu";
import {
  Footer,
  FooterNav,
  CopyRights,
  FooterNavWrapper,
  BlueLetters,
  Signature
} from "./styled";

export default () => (
  <Footer>
    <LogoComponent />
    <FooterNav>
      <FooterNavWrapper>
        <LeftMenu />
        <CopyRights>
          Copyright <BlueLetters>©</BlueLetters> 2017 Clear News. All rights
          reserved. <BlueLetters>Designed by Diego Valencia</BlueLetters>
        </CopyRights>
      </FooterNavWrapper>
    </FooterNav>
    <Signature>
      Programmed by: <BlueLetters>Michał Irzyłowski</BlueLetters>
    </Signature>
  </Footer>
);
