import React from "react";
import "../css/stylesheet.css";

function Stylesheet(props) {
  return (
    <div>
      <h1 className={props.style}>StyleSheet</h1>
    </div>
  );
}

export default Stylesheet;
