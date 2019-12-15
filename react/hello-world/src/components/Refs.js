import React, { Component } from "react";

export class Refs extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  showMessage = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} className="form-control" />
        <button onClick={this.showMessage} className="btn btn-primary mt-4">
          Show Message
        </button>
      </div>
    );
  }
}

export default Refs;
