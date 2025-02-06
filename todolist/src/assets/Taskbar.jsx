import "../style/Taskbar.css";
import { useState } from "react";

function Taskbar({ onInputChange }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value.trim() === '') {
        return; // Prevent adding empty task
      }
      onInputChange(event.target.value);
      event.target.value = ''; // Clear input after adding task
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
