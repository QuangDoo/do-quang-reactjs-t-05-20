import React, { Component } from "react";

export default class Properties extends Component {
  state = {
    name: "Go to Nordic Coder",
  };
  render() {
    return (
      <div>
        <h1>{this.props.hello}</h1>
        <button>{this.state.name}</button>
      </div>
    );
  }
}
