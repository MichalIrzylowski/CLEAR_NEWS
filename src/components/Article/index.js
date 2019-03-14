import React, { Component } from "react";

import { connect } from "react-redux";

import time from "../../images/time.png";
import talkingCloud from "../../images/talkingCloud.png";
import share from "../../images/share.png";
import eye from "../../images/eye.png";

import {
  ArticleBackgroundImage,
  ArticleBackgroundImageWhiteBox,
  ArticleContentWrapper,
  ArticleHeader,
  ArticleCategory,
  ArticleBasicInformations,
  ArticleBasicInformation,
  ArticleMainHeader,
  ArticleSubHeader,
  ArticleTextContentWrapper,
  ArticleRecentPostsHeaderWrapper,
  SectionHeader,
  Hr,
  Tags,
  ArticleAuthorBox,
  ArticleAuthorImage,
  ArticleWrittenBy,
  ArticleAuthorAboutAuthor
} from "../styled";

import ArticleParagraph from "./ArticleParagraph";
import ArticleQuote from "./ArticleQuote";
import RecentPosts from "./RecentPosts";
import RelatedPosts from "./RelatedPosts";

import { ArticlesData } from "../static_data/latest_stories";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readArticle: ArticlesData[0]
    };
  }
  render() {
    // console.log(this.props.match.params);
    // console.log(this.state.readArticle);

    const {
      backgroundImage,
      author,
      howMuchTimeAgo,
      views,
      shares,
      comments,
      content,
      category
    } = this.state.readArticle;
    const [mainHeader, subHeader] = this.state.readArticle.header;
    const { newsType } = this.props.match.params;

    const Content = content.map((element, i) => {
      return element.type === "paragraph" ? (
        <ArticleParagraph key={i} text={element.text} />
      ) : (
        <ArticleQuote key={i} text={element.text} author={element.author} />
      );
    });

    return (
      <div>
        <ArticleBackgroundImage backgroundImage={backgroundImage}>
          <ArticleBackgroundImageWhiteBox />
        </ArticleBackgroundImage>
        <ArticleContentWrapper>
          <ArticleHeader>
            <ArticleCategory>{newsType.toUpperCase()}</ArticleCategory>
            <ArticleBasicInformations>
              <ArticleBasicInformation>
                By {author.name}
              </ArticleBasicInformation>
              <ArticleBasicInformation>
                <img src={`/${time}`} title="watch-icon" />
                {howMuchTimeAgo}
              </ArticleBasicInformation>
              <ArticleBasicInformation>
                <img src={`/${talkingCloud}`} title="talking-claoud-icon" />
                {comments} comments
              </ArticleBasicInformation>
              <ArticleBasicInformation>
                <img src={`/${eye}`} title="eye-icon" />
                {views} views
              </ArticleBasicInformation>
              <ArticleBasicInformation>
                <img src={`/${share}`} title="share-icon" />
                {shares} shares
              </ArticleBasicInformation>
            </ArticleBasicInformations>
            <ArticleMainHeader>{mainHeader}</ArticleMainHeader>
            <ArticleSubHeader>{subHeader}</ArticleSubHeader>
          </ArticleHeader>
          <ArticleTextContentWrapper>
            {Content}
            <Tags>Tags: {category}</Tags>
          </ArticleTextContentWrapper>
          <ArticleRecentPostsHeaderWrapper>
            <SectionHeader>Recent Posts</SectionHeader>
            <Hr />
          </ArticleRecentPostsHeaderWrapper>
          <RecentPosts />
          <ArticleAuthorBox>
            <ArticleAuthorImage src={author.picture} />
            <div>
              <ArticleWrittenBy fat>Written By:</ArticleWrittenBy>
              <ArticleWrittenBy>{author.name}</ArticleWrittenBy>
            </div>
            <ArticleAuthorAboutAuthor>
              {author.aboutAuthor}
            </ArticleAuthorAboutAuthor>
          </ArticleAuthorBox>
          <RelatedPosts />
        </ArticleContentWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(Article);
