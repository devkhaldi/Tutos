import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.jobTitle = React.createRef();
    this.age = React.createRef();
    this.state = {};
  }
  showData = e => {
    e.preventDefault();
    console.log(this.firstName.current.value);
  };
  render() {
    return (
      <form onSubmit={this.showData}>
        <div className="form-group">
          <label>Enter first name</label>
          <input type="text" className="form-control" ref={this.firstName} />
        </div>
        <div className="form-group">
          <label>Enter last name</label>
          <input type="text" className="form-control" ref={this.lastName} />
        </div>
        <div className="form-group">
          <label>Enter job title</label>
          <input type="text" className="form-control" ref={this.jobTitle} />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="text" className="form-control" ref={this.age} />
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    );
  }
}

export default Form;
