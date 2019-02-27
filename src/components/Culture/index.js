import React, { Component } from "react";
import { connect } from "react-redux";

import { LOAD_CULTURE_NEWS_REQUEST } from "../../reducer/actionTypes";

import ArticleCard from "../Home/LatestStories/ArticleCard";
import loadingArrow from "../../images/loader.png";

import {
  Wrapper,
  SectionHeader,
  RouteDisplay,
  StyledLink,
  RouteDisplayCursor,
  ArticlesWrapper,
  RotateWrapper,
  Rotate
} from "../styled";

class Culture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadNews: false,
      currentPage: 0
    };
  }

  scrollTracker = () => {
    const documentHeight = document.body.scrollHeight;
    const actualPosition = window.pageYOffset;

    const { loadNews } = this.state;
    const { allArticles } = this.props.cultureNews;

    if (
      (actualPosition / documentHeight) * 100 > 55 &&
      !loadNews &&
      !allArticles
    ) {
      const { currentPage } = this.state;

      this.props.loadCultureNews(currentPage);

      this.setState({
        loadNews: !this.state.loadNews,
        currentPage: currentPage + 1
      });
    }
  };

  componentDidMount() {
    if (this.props.cultureNews.articles.length === 0) {
      const { currentPage } = this.state;

      this.props.loadCultureNews(currentPage);

      this.setState({
        loadNews: !this.state.loadNews,
        currentPage: currentPage + 1
      });
    }

    if (this.props.cultureNews.articles.length > 0) {
      const { articles } = this.props.cultureNews;

      console.log("[CULTURE NEWS] component did mount", articles.length / 9);
      this.setState({
        ...this.state,
        currentPage: articles.length / 9
      });
    }

    window.addEventListener("scroll", this.scrollTracker);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollTracker);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.cultureNews.articles.length !==
      prevProps.cultureNews.articles.length
    ) {
      this.setState({ loadNews: !this.state.loadNews });
    }
  }

  render() {
    const { loadNews } = this.state;
    const { allArticles, articles } = this.props.cultureNews;

    const Articles = articles.map(article => (
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
        <RouteDisplay>
          <StyledLink to="/" fontcolor="#ccc">
            Home
          </StyledLink>{" "}
          &lt; <RouteDisplayCursor>Culture</RouteDisplayCursor>
        </RouteDisplay>
        <SectionHeader>Culture</SectionHeader>
        <ArticlesWrapper>{Articles}</ArticlesWrapper>
        <RotateWrapper>
          <Rotate
            background={loadingArrow}
            visible={loadNews && !allArticles}
          />
        </RotateWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  const { cultureNews } = state;
  return {
    cultureNews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCultureNews: pageNumber => {
      dispatch({ type: LOAD_CULTURE_NEWS_REQUEST, pageNumber });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Culture);
