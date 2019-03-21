import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper, SectionHeader, Hr, ArticlesWrapper } from "../../styled";
import ArticleCard from "./ArticleCard";

import actions from "../../../reducer/actionTypes";

class LatestStories extends Component {
  componentDidMount() {
    console.log("latest_news", this.props);
    if (this.props.latestStories.length === 0) {
      this.props.loadLatestStories();
    }
  }

  render() {
    console.log("[HOME - LATEST Stories -index.js] --- props", this.props);
    const Articles = this.props.latestStories.map(article => (
      <ArticleCard
        key={article._id}
        id={article._id}
        image={article.mainImage}
        text={article.text}
        author={article.author}
        comments={article.comments}
        // date={article.date}
        category={article.category}
        date={article.createdAt}
      />
    ));

    return (
      <Wrapper>
        <SectionHeader>Latest Stories</SectionHeader>
        <Hr />
        <ArticlesWrapper>{Articles}</ArticlesWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  const { latestStories } = state;
  return {
    latestStories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLatestStories: () => {
      dispatch({ type: actions.LATEST_STORIES_REQUEST });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestStories);
