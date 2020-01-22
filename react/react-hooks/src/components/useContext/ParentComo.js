import React, { useState } from "react";
import A from "./A";

export let PersonContext = React.createContext();

function ParentComo() {
  const [person, setPerson] = useState({
    name: "",
    age: 0
  });
  return (
    <PersonContext.Provider value={person}>
      <div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              value={person.name}
              onChange={e => setPerson({ ...person, name: e.target.value })}
              type="text"
              id="name"
            />
          </div>
          <div className="div">
            <label htmlFor="age">Age</label>
            <input
              value={person.age}
              onChange={e => setPerson({ ...person, age: e.target.value })}
              type="text"
              id="age"
            />
          </div>
          <button type="submit">Display</button>
        </form>
        <A />
      </div>
    </PersonContext.Provider>
  );
}

export default ParentComo;
