import React from "react";

function Memo({ name }) {
  console.log("Memo component");
  return <div>Memo component {name}</div>;
}

export default React.memo(Memo);
