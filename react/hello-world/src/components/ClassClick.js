import React, { Component } from "react";

export class ClassClick extends Component {
  showMessage() {
    console.log("Button clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.showMessage}>Click me </button>
      </div>
    );
  }
}
export default ClassClick;
