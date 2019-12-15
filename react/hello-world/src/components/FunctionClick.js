import React from "react";

function FunctionClick() {
  function showMessage() {
    console.log("Button clicked");
  }
  return (
    <div>
      <button onClick={showMessage}>Click here</button>
    </div>
  );
}

export default FunctionClick;
