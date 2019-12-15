import React from "react";

function ChildComp(props) {
  return (
    <div>
      <button onClick={() => props.greetParent("khaldi")}>Greet parent</button>
    </div>
  );
}

export default ChildComp;
