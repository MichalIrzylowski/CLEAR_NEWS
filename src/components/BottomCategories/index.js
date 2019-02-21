import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  SectionHeader,
  Hr,
  EconomyWrapper,
  ArticlesWrapper
} from "../styled";
import ArticleCard from "../LatestStories/ArticleCard";

import {
  LOAD_ECONOMY_NEWS_REQUEST,
  LOAD_HEALTH_NEWS_REQUEST
} from "../../reducer/actionTypes";

class BottomCategories extends Component {
  componentDidMount() {
    console.log("Bottom Categories", this.props);
    if (this.props.economyNews.length === 0) {
      this.props.loadEconomyNews();
    }
    if (this.props.healthNews.length === 0) {
      this.props.loadHealthNews();
    }
  }

  render() {
    const economyArticles = this.props.economyNews.map(economySpot => (
      <ArticleCard
        key={economySpot._id}
        image={economySpot.mainImage}
        text={economySpot.text}
        author={economySpot.author}
        comments={economySpot.comments}
        date={economySpot.date} // date={economySpot.createdAt.toLocaleString()}
      />
    ));

    const healthArticles = this.props.healthNews.map(healthSpot => (
      <ArticleCard
        key={healthSpot._id}
        text={healthSpot.text}
        author={healthSpot.author}
        comments={healthSpot.comments}
        date={healthSpot.date} // date={economySpot.createdAt.toLocaleString()}
        abstract={healthSpot.abstract}
        health
      />
    ));

    return (
      <Wrapper flex>
        <EconomyWrapper width="65%" margin="35px">
          <SectionHeader>Economy</SectionHeader>
          <Hr />
          <ArticlesWrapper>{economyArticles}</ArticlesWrapper>
        </EconomyWrapper>
        <EconomyWrapper width="300px">
          <SectionHeader>Health</SectionHeader>
          <Hr />
          <ArticlesWrapper>{healthArticles}</ArticlesWrapper>
        </EconomyWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    economyNews: state.economyNews,
    healthNews: state.healthNews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadEconomyNews: () => {
      dispatch({ type: LOAD_ECONOMY_NEWS_REQUEST });
    },
    loadHealthNews: () => {
      dispatch({ type: LOAD_HEALTH_NEWS_REQUEST });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomCategories);
