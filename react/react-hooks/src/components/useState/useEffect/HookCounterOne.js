import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  });
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setcounter(prevCounter => prevCounter + 1);
        }}>
        Increment counter {counter}
      </button>
    </div>
  );
}

export default HookCounterOne;
