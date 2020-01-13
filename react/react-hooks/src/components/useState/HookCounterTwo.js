import React, { useState } from "react";

function HookCounterTwo() {
  const initialCounter = 0;
  const [counter, setcounter] = useState(initialCounter);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setcounter(prevcounter => prevcounter + 1);
    }
  };
  return (
    <div>
      Counter : {counter}
      <button onClick={() => setcounter(prevcounter => prevcounter + 1)}>Increment</button>
      <button onClick={() => setcounter(prevcounter => prevcounter - 1)}>Decrement</button>
      <button onClick={() => setcounter(initialCounter)}>Reset</button>
      <button onClick={incrementFive}>Increment Five</button>
    </div>
  );
}

export default HookCounterTwo;
