import React, { Component } from "react";

export class ClassCounterOne extends Component {
  state = {
    count: 0
  };
  componentDidMount = () => {
    document.title = `counter is ${this.state.count}`;
  };

  componentDidUpdate() {
    document.title = `counter is ${this.state.count}`;
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}>
          Increment counter {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
