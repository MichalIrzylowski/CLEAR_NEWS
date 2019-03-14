import React from "react";

import { Menu, MenuItem, StyledLink } from "../styled";

import fb from "../../images/fb.png";
import gp from "../../images/gp.png";
import ig from "../../images/ig.png";
import tw from "../../images/tw.png";

export default () => (
  <Menu width="70px;">
    <MenuItem>
      <StyledLink to="/facebook">
        <img src={`/${fb}`} alt="facebook-icon" />
      </StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/instagram">
        <img src={`/${ig}`} alt="instagram-icon" />
      </StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/tweeter">
        <img src={`/${tw}`} alt="tweeter-icon" />
      </StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/googleplus">
        <img src={`/${gp}`} alt="googleplus-icon" />
      </StyledLink>
    </MenuItem>
  </Menu>
);
