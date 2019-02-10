import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Slider from "./Slider";
import LatestStories from "./LatestStories";

class Home extends Component {
  handleClick() {
    this.props.handleChangeState();
  }

  render() {
    return (
      <>
        <Slider />
        <LatestStories />
      </>
    );
  }
}

Home.propTypes = {
  changeText: PropTypes.func
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeState: () => dispatch({ type: "CHANGE_TEXT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
