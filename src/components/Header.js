import React from "react";

import { Header } from "./styled";
import LeftMenu from "./header_footer_menus/LeftMenu";

import RightMenu from "./header_footer_menus/RightMenu";

export default () => (
  <Header>
    <LeftMenu />
    <RightMenu />
  </Header>
);
