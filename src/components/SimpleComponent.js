// Code SimpleComponent Herer
import React, { Component } from "react";

export default class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      mood: "happy"
    };
  }
  handleClick = () => {
    const mood = this.state.mood;
    if (mood === "happy") {
      this.setState({ mood: "sad" });
    } else {
      this.setState({ mood: "happy" });
    }
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
