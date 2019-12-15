import React, { Component } from "react";
import PureCompo from "./PureCompo";
import RegularCompo from "./RegularCompo";

class ParentCompo extends Component {
  state = {
    name: ""
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        name: "El khaldi"
      });
    }, 2000);
  };
  render() {
    const { name } = this.state;
    console.log("----------------Parent Component--------------------");
    return (
      <div>
        parent component
        <PureCompo name={name} />
        <RegularCompo name={name} />
      </div>
    );
  }
}

export default ParentCompo;
