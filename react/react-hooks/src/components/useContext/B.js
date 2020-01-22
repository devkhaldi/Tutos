import React, { useContext } from "react";
import { PersonContext } from "./ParentComo";

function B() {
  let person = useContext(PersonContext);
  return (
    <div>
      component B name {person.name} - age {person.age}
    </div>
  );
}

export default B;
