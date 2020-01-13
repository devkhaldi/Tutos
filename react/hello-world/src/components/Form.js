import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      message: "",
      topic: "react"
    };
  }

  handelUserName = event => {
    this.setState({
      userName: event.target.value
    });
  };

  handelMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  handelTopic = event => {
    this.setState({
      topic: event.target.value
    });
  };

  handelForm = event => {
    alert(`${this.state.userName} ${this.state.message} ${this.state.topic}`);
    event.preventDefault();
    this.setState({
      userName: "",
      message: "",
      topic: "react"
    });
  };

  render() {
    const { userName, message, topic } = this.state;
    return (
      <form onSubmit={this.handelForm} className="col-md-4 offset-4 mt-5">
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input type="text" onChange={this.handelUserName} value={userName} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="" onChange={this.handelMessage} value={message} className="form-control"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <select value={topic} className="form-control" onChange={this.handelTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue JS</option>
          </select>
        </div>
        <input type="submit" className="form-control btn btn-success" />
      </form>
    );
  }
}

export default Form;
