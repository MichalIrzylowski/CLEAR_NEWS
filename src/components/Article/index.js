import React, { Component } from "react";
import Moment from "react-moment";

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

import { ARTICLE_REQUEST } from "../../reducer/actionTypes";

class Article extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     readArticle: ArticlesData[0]
  //   };
  // }

  componentDidMount() {
    const { readArticle, requestForArticle } = this.props;
    const { id } = this.props.match.params;

    console.log("[ARTICLE - index - component did mount]--props", this.props);

    if (readArticle === undefined) {
      console.log("[ARTICLE not found in state!]");
      requestForArticle(id);
    }
  }

  render() {
    // console.log("[ARTICLE - index.js] --- props", this.props);
    // console.log(this.state.readArticle);
    if (!this.props.readArticle) {
      return <div>Loading an article...</div>;
    } else {
      const {
        backgroundImage,
        author,
        createdAt,
        views,
        shares,
        comments,
        content,
        category
      } = this.props.readArticle;
      const [mainHeader, subHeader] = this.props.readArticle.header;
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
                  <Moment fromNow>{createdAt}</Moment>
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
}

const mapStateToProps = (state, ownProps) => {
  // return { ...state };
  console.log("[ARTICLE] - own props", ownProps);
  return {
    readArticle: state[`${ownProps.match.params.newsType}News`].articles.find(
      article => article._id === ownProps.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestForArticle: id => {
      dispatch({ type: ARTICLE_REQUEST, id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
