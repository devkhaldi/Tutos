import React, { PureComponent } from "react";

class PureCompo extends PureComponent {
  render() {
    console.log("Pure component");
    return <div>pure component{this.props.name}</div>;
  }
}

export default PureCompo;
