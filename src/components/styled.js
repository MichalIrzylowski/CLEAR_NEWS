import styled from "styled-components";
import { Link } from "react-router-dom";
import Grupo from "../images/Grupo@2x.png";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #707070;
  padding: 14px 100px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.width};
`;

export const MenuItem = styled.li`
  text-transform: ${props => (props.uppercase ? "uppercase" : "none")};
  font-size: ${props => (props.mainMenuItem ? "14px" : "12px")};
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
`;

export const BlueBall = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #29abe2;
`;

export const HeroLogo = styled.h1`
  display: inline;
  font-size: 55px;
`;

export const SubLogo = styled.span`
  font-size: 24px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 100%;
  position: relative;
`;

export const Active = styled.span`
  background-color: #29abe2;
  width: ${props => `${props.position.width + props.position.width * 0.5}px`};
  height: 5px;
  position: absolute;
  bottom: 0;
  left: ${props => `${props.position.x - props.position.width * 0.3}px`};
  transition: 0.3s ease-in-out;
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 491px;
  background-image: url(${Grupo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const SliderRightArrow = styled.img`
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Abstract = styled.div`
  height: 160px;
  width: 600px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Author = styled.h4`
  position: absolute;
  top: 16px;
  left: 100px;
  font-weight: 400;
  font-size: 14px;
`;

export const AbstractContent = styled.p`
  width: 400px;
  position: absolute;
  left: 100px;
  top: 48px;
  font-size: 20px;
  font-weight: 600;
`;
