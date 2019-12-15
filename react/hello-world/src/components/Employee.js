import React from "react";

function Employee(props) {
  return (
    <div>
      <h2>Employee first name : {props.firstName} </h2>
      <h2>Employee second name : {props.secondName} </h2>
      <h2>Employee age : {props.age}</h2>
      {props.children}
    </div>
  );
}

export default Employee;
