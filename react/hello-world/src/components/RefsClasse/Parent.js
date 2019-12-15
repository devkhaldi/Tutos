import React, { Component } from "react";
import Input from "./Input";

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.classRef = React.createRef();
    this.state = {};
  }
  focusInputFromParent = () => {
    this.classRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.classRef} />
        <button onClick={this.focusInputFromParent}>Focus input</button>
      </div>
    );
  }
}

export default Parent;
