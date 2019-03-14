import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Grupo from "../images/Grupo@2x.png";
import advertisment from "../images/advertisment.jpg";

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
  background-image: url(/${Grupo});
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

export const ArticleBackgroundImage = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-position: top;
  background-repeat: repeat;
  background-size: cover;
  height: 490px;
  width: 100vw;
`;

export const ArticleBackgroundImageWhiteBox = styled.div`
  background-color: #fff;
  width: 57%;
  height: 150px;
  position: relative;
  bottom: -340px;
  left: 0;
`;

export const ArticleContentWrapper = styled.div`
  max-width: 970px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 68.76% auto;
  grid-template-rows: auto auto auto auto;
  grid-gap: 20px;
  position: relative;
  top: -120px;
`;

export const ArticleHeader = styled.div`
  width: 560px;
  height: 250px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const ArticleCategory = styled.span`
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  padding: 10px 13px;
`;

export const ArticleBasicInformations = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 500px;
  margin-top: 30px;
`;

export const ArticleBasicInformation = styled.li`
  font-size: 14px;
`;

export const ArticleMainHeader = styled.h3`
  font-size: 24px;
  font-weight: 700;
  width: 470px;
  margin-top: 30px;
`;

export const ArticleSubHeader = styled.h4`
  width: 470px;
  color: #4d4d4d;
  font-weight: 300;
  font-size: 18px;
  margin-top: 30px;
`;

export const ArticleTextContentWrapper = styled.div`
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

export const ArticleParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  &:not(:first-of-type) {
    margin-top: 40px;
  }

  &:last-of-type {
    margin-bottom: 10px;
  }
`;

export const ArticleQuote = styled.div`
  width: 530px;
  margin: 60px 0 10px 40px;
  padding-left: 30px;
  border-left: 8px solid #d6f1ff;
`;

export const ArticleQuoteAuthor = styled.p`
  font-size: 16px;
  margin-top: 30px;
`;

export const ArticleQuoteText = styled.p`
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin: 30px 0;
`;

export const ArticleRecentPostsHeaderWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  align-self: end;
`;

export const ArticleRecentPostsWrapper = styled.aside`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ArticleRecentPostsTitles = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 30px;
  border-left: 1px solid #000;
`;

export const ArticleRecentPostsTitle = styled.li`
  font-size: 18px;
  font-weight: 700;
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export const SubscribeBoxWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
`;

export const SubscribeBoxHeader = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 28px 70px;
  text-transform: uppercase;
`;

export const SubscribeBoxBody = styled.form`
  width: 100%;
  height: 210px;
  padding: 30px;
  border: 1px solid #ccc;
`;

export const SubscribeBoxInput = styled.input`
  width: 100%;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const SubscribeBoxButton = styled(SubscribeBoxInput)`
  background-color: #ff6262;
  color: #fff;
  text-transform: uppercase;
  border: none;
`;

export const AdvertismentWrapper = styled.div`
  margin-top: 50px;
  height: 470px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  border-bottom: 2px solid #000;
`;

export const Advertising = styled.span`
  font-size: 14px;
  color: #000;
  font-weight: 300;
  text-align: ${props => (props.center ? "center" : "left")};
  margin-bottom: 15px;
  margin-left: ${props => (props.marginLeft ? "35px" : 0)};
`;

export const AdvertismentPicture = styled.div`
  background-image: url(/${advertisment});
  background-position: 75% center;
  background-repeat: no-repeat;
  width: 100%;
  height: 365px;
`;

export const AdvertiseWithUs = styled(Advertising)`
  font-size: 24px;
  margin: 20px 0 25px 35px;
`;

export const Tags = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 100px 0 50px 0;
`;

export const ArticleAuthorBox = styled.div`
  height: 165px;
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-column: 1 2;
  grid-row: 3 4;
`;

export const ArticleAuthorImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

export const ArticleWrittenBy = styled.p`
  font-size: 16px;
  font-weight: ${props => (props.fat ? "700" : "400")};
  line-height: 24px;
`;

export const ArticleAuthorAboutAuthor = styled.p`
  width: 330px;
`;

export const RelatedNewsWrapper = styled.div`
  height: 110px;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin-top: 50px;
`;

export const RelatedNewsHeader = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const RelatedNewsLinks = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  list-style-type: none;
`;

export const RelatedNewsLink = styled.li`
  width: 200px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  font-size: 18px;
`;
