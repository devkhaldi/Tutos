import React, { useState } from "react";

function HookCounterThree() {
  const [name, setname] = useState({ firstName: "", secondName: "" });

  return (
    <React.Fragment>
      <form className="p-5">
        <div className="form-gourp">
          <label>Enter first name</label>
          <input
            value={name.firstName}
            onChange={e => setname({ ...name, firstName: e.target.value })}
            type="text"
            className="form-control"
            placeholder="first name"
          />
        </div>
        <div className="form-gourp">
          <label>Enter last name</label>
          <input
            value={name.secondName}
            onChange={e => setname({ ...name, secondName: e.target.value })}
            type="text"
            className="form-control"
            placeholder="last name"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Display" className="btn btn-primary form-control my-2" />
        </div>
      </form>

      <h2>First Name : {name.firstName}</h2>
      <h2>Second Name : {name.secondName}</h2>
    </React.Fragment>
  );
}

export default HookCounterThree;
