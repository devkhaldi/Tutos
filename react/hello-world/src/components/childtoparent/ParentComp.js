import React, { Component } from "react";
import ChildComp from "./ChildComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Bonjour"
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(name) {
    alert(`hello ${this.state.parentName} name : ${name}`);
  }
  render() {
    return (
      <div>
        <ChildComp greetParent={this.greetParent} />
      </div>
    );
  }
}

export default ParentComp;
