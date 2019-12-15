import React, { PureComponent } from "react";
import PureCompo from "./PureCompo";
import RegularCompo from "./RegularCompo";
import Memo from "./Memo";

class ParentCompo extends PureComponent {
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
        <Memo />
        {/* <PureCompo name={name} />
        <RegularCompo name={name} /> */}
      </div>
    );
  }
}

export default ParentCompo;
