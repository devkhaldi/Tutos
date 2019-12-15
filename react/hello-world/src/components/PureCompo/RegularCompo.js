import React, { Component } from "react";

class RegularCompo extends Component {
  render() {
    console.log("Regular compo");
    return <div>regular component{this.props.name}</div>;
  }
}

export default RegularCompo;
