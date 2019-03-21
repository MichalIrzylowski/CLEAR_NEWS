import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ArticleRecentPostsWrapper,
  ArticleRecentPostsTitles,
  ArticleRecentPostsTitle
} from "../styled";
import { LOAD_RECENT_POSTS_REQUEST } from "../../reducer/actionTypes";
import SubscribeBox from "./SubscribeBox";
import Advertisment from "./Advertisment";

class RecentPosts extends Component {
  componentDidMount() {
    // console.log("[RECENT POSTS component]");
    const { recentPosts, loadRecentPosts } = this.props;
    if (recentPosts.length === 0) {
      loadRecentPosts();
    }
  }

  render() {
    console.log("[RECENT POSTS] -- props", this.props);
    const { recentPosts } = this.props;
    const RecentPosts = recentPosts.map((post, i) => (
      <ArticleRecentPostsTitle key={post._id}>
        {post.text}
      </ArticleRecentPostsTitle>
    ));
    return (
      <ArticleRecentPostsWrapper>
        <ArticleRecentPostsTitles>{RecentPosts}</ArticleRecentPostsTitles>
        <SubscribeBox />
        <Advertisment />
      </ArticleRecentPostsWrapper>
    );
  }
}

const mapStateToProps = state => {
  const { recentPosts } = state;
  return {
    recentPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadRecentPosts: () => {
      dispatch({ type: LOAD_RECENT_POSTS_REQUEST });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentPosts);
