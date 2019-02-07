import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 49px;
  position: relative;
  background-color: #707070;
  padding: 0 100px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  position: absolute;
  top: 14px;
`;

export const RightMenu = styled(Menu)`
  right: 100px;
`;

export const MenuItem = styled.li`
  &:not(:first-child) {
    margin-left: 30px;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
