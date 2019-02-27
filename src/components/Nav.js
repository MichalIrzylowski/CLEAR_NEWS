import React, { Component } from "react";
import { Nav, Menu, MenuItem, StyledLink } from "./styled";
import search from "../images/search.png";
import { Active } from "./styled";

export default class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { active: { x: 0, width: 0 } };
  }

  activateMenu = e => {
    const { x, width } = e.target.getBoundingClientRect();
    this.setState({ active: { x, width } });
  };

  render() {
    return (
      <Nav>
        <Menu width="970px">
          <Active position={this.state.active} />
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            <StyledLink to="/" fontcolor="#000">
              Home
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            <StyledLink to="/culture" fontcolor="#000">
              Culture
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            Entertainment
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            Politics
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            Sports
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            Worldwide
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            Innovation
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            Education
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            <img src={search} />
          </MenuItem>
        </Menu>
      </Nav>
    );
  }
}
