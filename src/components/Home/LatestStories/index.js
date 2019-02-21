import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper, SectionHeader, Hr, ArticlesWrapper } from "../../styled";
import ArticleCard from "./ArticleCard";

import actions from "../../../reducer/actionTypes";

class LatestStories extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("latest_news", this.props);
    if (this.props.latestStories.length === 0) {
      this.props.loadLatestStories();
    }
  }

  render() {
    const Articles = this.props.latestStories.map(article => (
      <ArticleCard
        key={article._id}
        image={article.mainImage}
        text={article.text}
        author={article.author}
        comments={article.comments}
        date={article.date}
        // date={article.createdAt.toLocaleString()}
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
