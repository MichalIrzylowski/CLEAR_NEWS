import React from "react";

import { Menu, MenuItem, StyledLink } from "../styled";

export default () => (
  <Menu width="475px">
    <MenuItem>
      <StyledLink to="/About">About</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/Advertise">Advertise</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/Privacy">Privacy and Policy</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/Terms">Terms and Conditions</StyledLink>
    </MenuItem>
    <MenuItem>
      <StyledLink to="/Contact">Contact</StyledLink>
    </MenuItem>
  </Menu>
);
