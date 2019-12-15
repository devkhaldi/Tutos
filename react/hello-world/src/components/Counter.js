import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment() {
    // // this.state.count = this.state.count + 1   the view dosn't rendering
    // this.setState({
    //     count : this.state.count+1
    // },
    //     () => console.log('call back counter: ' + this.state.count) // output : 1
    // )
    // console.log(this.state.count)   // output : 0

    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h3>Counter value is : {this.state.count} </h3>
        <button onClick={() => this.incrementFive()}>Increment</button>
        <br />
      </div>
    );
  }
}

export default Counter;
