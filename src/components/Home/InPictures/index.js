import React, { Component } from "react";
import { connect } from "react-redux";
import { LOAD_IN_PICTURES_REQUEST } from "../../../reducer/actionTypes";

import { Wrapper, SectionHeader, InPicturesWrapper } from "../../styled";

import SinglePicture from "./SinglePicture";

class InPictures extends Component {
  componentDidMount() {
    console.log("inPictures", this.props);
    if (this.props.inPictures.length === 0) {
      this.props.loadInPictures();
    }
  }

  render() {
    const pictures = this.props.inPictures.map(picture => (
      <SinglePicture
        key={picture._id}
        src={picture.src}
        title={picture.title}
      />
    ));

    return (
      <Wrapper width="100%">
        <SectionHeader center>In Pictures</SectionHeader>
        <InPicturesWrapper>{pictures}</InPicturesWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  const { inPictures } = state;
  return {
    inPictures
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadInPictures: () => {
      dispatch({ type: LOAD_IN_PICTURES_REQUEST });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InPictures);
