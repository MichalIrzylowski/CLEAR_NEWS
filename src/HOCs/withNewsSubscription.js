import React, { Component } from "react";
import { connect } from "react-redux";

export default function(
  WrappedComponent,
  newsType,
  loadNewsAction,
  heading,
  typeOfReducer
) {
  class Subscription extends Component {
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
      const { allArticles } = this.props[newsType];

      console.log(
        (actualPosition / documentHeight) * 100 > 55,
        !loadNews,
        !allArticles
      );

      if (
        (actualPosition / documentHeight) * 100 > 55 &&
        !loadNews &&
        !allArticles
      ) {
        console.log("[HOC] trigered scroll load");
        const { currentPage } = this.state;

        loadNewsAction(typeOfReducer, currentPage, heading.toLowerCase());

        this.setState({
          loadNews: !this.state.loadNews,
          currentPage: currentPage + 1
        });
      }
    };

    componentDidMount() {
      // console.log("HOC - compoenent did mount", this.state);
      if (this.props[newsType].articles.length === 0) {
        const { currentPage } = this.state;

        loadNewsAction(typeOfReducer, currentPage, heading.toLowerCase());

        this.setState({
          loadNews: !this.state.loadNews,
          currentPage: currentPage + 1
        });
      }

      if (this.props[newsType].articles.length > 0) {
        const { articles } = this.props[newsType];

        this.setState({
          ...this.state,
          currentPage: articles.length / 9
        });
      }

      window.addEventListener("scroll", this.scrollTracker);
    }

    componentDidUpdate(prevProps) {
      if (
        this.props[newsType].articles.length !==
          prevProps[newsType].articles.length ||
        this.props[newsType].allArticles !== prevProps[newsType].allArticles
      ) {
        this.setState({ loadNews: !this.state.loadNews });
      }
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.scrollTracker);
    }

    render() {
      // console.log("[HOC - subscription]");
      // console.log("[HOC - subscription]", this.props);
      // console.log("[HOC - subscription]", this.props[newsType]);
      // console.log("[HOC - subscription]", this.props[newsType].articles);
      return (
        <WrappedComponent
          news={this.props[newsType].articles}
          {...this.props}
          heading={heading}
        />
      );
    }
  }

  const mapStateToProps = state => {
    return {
      ...state
    };
  };

  return connect(mapStateToProps)(Subscription);
}
