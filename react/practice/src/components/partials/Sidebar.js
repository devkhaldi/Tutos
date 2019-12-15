import React from "react";

function Sidebar({ activeItemName }) {
  const list = ["React Refs", "Pure components"];

  return (
    <div className="sidebar">
      <div className="list-group">
        {list.map(item => {
          return (
            <button
              key={item}
              type="button"
              className={`list-group-item list-group-item-action ${item ==
                activeItemName && "active"}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
