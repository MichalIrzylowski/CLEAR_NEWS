import React, { Component } from "react";
import {
  SubscribeBoxWrapper,
  SubscribeBoxHeader,
  SubscribeBoxBody,
  SubscribeBoxInput,
  SubscribeBoxButton
} from "../styled";

class SubscribeBox extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ name: "", email: "" });
  };

  render() {
    const { name, email } = this.state;

    return (
      <SubscribeBoxWrapper>
        <SubscribeBoxHeader>Subscribe Now</SubscribeBoxHeader>
        <SubscribeBoxBody onSubmit={this.handleSubmit}>
          <SubscribeBoxInput
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
            placeholder="your name here"
          />
          <SubscribeBoxInput
            type="email"
            value={email}
            onChange={this.handleChange}
            name="email"
            placeholder="your email here"
          />
          <SubscribeBoxButton type="submit" value="Subscribe" />
        </SubscribeBoxBody>
      </SubscribeBoxWrapper>
    );
  }
}

export default SubscribeBox;
