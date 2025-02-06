import "../style/Taskbar.css";
import { useState } from "react";



function Taskbar({ onInputChange }) {

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        onInputChange(event.target.value);
    }
    event.target.style.minWidth = ((event.target.value.length + 1) * 7) + 'px';
  };

  return (
    <input
      type="text"
      placeholder="Add in a task..."
      onKeyDown={handleKeyDown}
    ></input>
  );
}

export default Taskbar;
