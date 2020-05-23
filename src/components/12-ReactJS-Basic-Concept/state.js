import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  onClick = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.onClick}>click</button>
      </div>
    );
  }
}

export default State;
