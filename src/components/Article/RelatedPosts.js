import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import {
  RelatedNewsWrapper,
  RelatedNewsHeader,
  RelatedNewsLinks,
  RelatedNewsLink
} from "../styled";

const RelatedPosts = ({ relatedNews }) => {
  const RelatedNews = relatedNews.map((news, i) => {
    if (i < 3) {
      // console.log("[RELATED POSTS] news", news.text);
      return <RelatedNewsLink key={i}>{news.text}</RelatedNewsLink>;
    }
  });

  return (
    <RelatedNewsWrapper>
      <RelatedNewsHeader>Related News:</RelatedNewsHeader>

      <RelatedNewsLinks>{RelatedNews}</RelatedNewsLinks>
    </RelatedNewsWrapper>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log("[RELATED POSTS] --- own props", ownProps);

  const { newsType } = ownProps.match.params;

  // console.log("[RELATED POSTS] news type", state[`${newsType}News`]);

  return {
    relatedNews: state[`${newsType}News`].articles
  };
};

export default withRouter(connect(mapStateToProps)(RelatedPosts));
