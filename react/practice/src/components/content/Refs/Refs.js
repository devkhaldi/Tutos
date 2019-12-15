import React, { Component } from "react";
import Form from "./Form";
import Output from "./Output";
import Sidebar from "../../partials/Sidebar";

class Refs extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="sidebar col-3">
            <Sidebar activeItemName="React Refs" />
          </div>
          <div className="content col-9">
            <div className="row">
              <div className="col-12">
                <h3 align="conter">Enter data</h3>
                <Form />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Output />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Refs;
