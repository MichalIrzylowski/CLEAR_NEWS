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
            <StyledLink to="/entertainment" fontcolor="#000">
              Entertainment
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            <StyledLink to="/politics" fontcolor="#000">
              Politics
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            <StyledLink to="/sports" fontcolor="#000">
              Sports
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            <StyledLink to="/worldwide" fontcolor="#000">
              Worldwide
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            <StyledLink to="/innovation" fontcolor="#000">
              Innovation
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            <StyledLink to="/education" fontcolor="#000">
              Education
            </StyledLink>
          </MenuItem>
          <MenuItem onClick={this.activateMenu} mainMenuItem uppercase>
            <StyledLink to="/search" fontcolor="#000">
              <img src={search} />
            </StyledLink>
          </MenuItem>
        </Menu>
      </Nav>
    );
  }
}
