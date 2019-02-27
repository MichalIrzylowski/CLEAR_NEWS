import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Grupo from "../images/Grupo@2x.png";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: ${props => (props.fontcolor ? props.fontcolor : "#fff")};
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

export const HeroLogo = styled.h2`
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
  border-bottom: 1px solid #707070;
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

export const Wrapper = styled.section`
  width: ${props => (props.width ? props.width : "970px")};
  padding: 50px 0;
  display: ${props => (props.flex ? "flex" : "block")};
  &:nth-child(odd):not(:nth-child(1)) {
    background-color: #f2f2f2;
  }
`;

export const SectionHeader = styled.h3`
  font-size: 24px;
  font-weight: 400;
  text-align: ${props => (props.center ? "center" : "left")};
`;

export const Hr = styled.hr`
  width: 68px;
  height: 5px;
  background-color: #29abe2;
  margin-top: 20px;
  border: none;
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const EconomyWrapper = styled.div`
  width: ${props => props.width};
  margin-right: ${props => props.margin};
`;

export const ArticleCardWrapper = styled.div`
  width: 300px;
  height: ${props => (props.health ? "190px" : "360px")};
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArticleCardImage = styled.div`
  height: 245px;
  width: 300px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

export const ArticleCardAbstract = styled.p`
  width: 100%;
  padding: 10px 0;
  font-weight: ${props => (props.weight ? props.weight : 700)};
  color: ${props => (props.color ? props.color : "#000000")};
`;

export const ArticleCardBasicInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const ArticleCardBasicInfoItem = styled.li`
  font-size: 14px;
  &:not(:nth-child(1)) {
    margin-left: 10px;
  }
`;

export const InPicturesWrapper = styled.div`
  display: flex;
  width: 970px;
  justify-content: space-between;
  margin: 50px auto 0 auto;
`;

export const InPictureHover = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;

export const InPicturePicture = styled.img`
  width: 300px;
  height: 240px;
`;

export const InPictureWrapper = styled.div`
  position: relative;
  &:hover ${InPicturePicture} {
    opacity: 0.8;
  }
  &:hover ${InPictureHover} {
    display: block;
  }
`;

export const Footer = styled.footer`
  height: 260px;
  width: 100%;
  border-top: 1px solid #707070;
  position: relative;
`;

export const FooterNav = styled.div`
  height: 110px;
  width: 100%;
  background-color: #707070;
  position: relative;
`;

export const FooterNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 970px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CopyRights = styled.p`
  color: #fff;
  font-size: 12px;
`;

export const BlueLetters = styled.span`
  color: #29abe2;
`;

export const Signature = styled.p`
  position: absolute;
  bottom: 10px;
  right: 5px;
  color: #fff;
  font-size: 12px;
`;

export const RouteDisplay = styled.h4`
  font-size: 14px;
  color: #ccc;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 50px;
`;

export const RouteDisplayCursor = styled.span`
  color: #000;
`;

const loader = keyframes`
  from{
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`;

export const RotateWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 50px;
  position: relative;
`;

export const Rotate = styled.div`
  animation: ${loader} 1s linear infinite;
  background-image: url(${props => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: ${props => (props.visible ? "block" : "none")};
`;
