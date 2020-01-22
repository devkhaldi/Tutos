import React, { useEffect, useState } from "react";

function HookTwo() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);
  return (
    <div>
      X {x} - Y {y}
    </div>
  );
}

export default HookTwo;
