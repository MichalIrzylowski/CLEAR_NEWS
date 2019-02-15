import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper, SectionHeader, Hr, ArticlesWrapper } from "./styled";
import ArticleCard from "./ArticleCard";

import actions from "../reducer/actionTypes";

class LatestStories extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.latestStories.length === 0) {
      this.props.loadLatestNews();
    }
  }

  render() {
    const Articles = this.props.latestStories.map((article, i) => (
      <ArticleCard
        key={i}
        image={article.mainImage}
        text={article.text}
        author={article.author}
        comments={article.comments}
        date={article.date}
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
