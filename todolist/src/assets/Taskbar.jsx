import "../style/Taskbar.css";
import { useState } from "react";

function Taskbar({ onInputChange }) {

  const handleKeyDown = (event) => { // Taking the event from pressing key
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value.trim() === '') { // If event is empty, return nothing.
        return; 
      }
      onInputChange(event.target.value);
      event.target.value = ''; 
    }
    event.target.style.minWidth = ((event.target.value.length + 1) * 7) + 'px';
  };

  return (
    <input
      type="text"
      className="taskbar"
      placeholder="Add in a task..."
      onKeyDown={handleKeyDown}
    ></input>
  );
}

export default Taskbar;
