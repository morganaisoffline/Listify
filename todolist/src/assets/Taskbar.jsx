import "../style/Taskbar.css";
import { useState } from "react";

function Taskbar({ onInputChange }) {
  const [placeholder, setPlaceholder] = useState("Tap the title to toggle between Light and Dark Mode");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value.trim() === "") {
        return;
      }
      onInputChange(event.target.value);
      event.target.value = "";
      event.target.style.minWidth = "150px"; // Reset width after adding task
    }
    event.target.style.minWidth = Math.max(150, (event.target.value.length + 1) * 7) + "px";
  };

  const handleFocus = (event) => {
    setPlaceholder("Add a task...");
    event.target.style.minWidth = Math.max(150, (event.target.value.length + 1) * 7) + "px";
  };

  const handleBlur = (event) => {
    setPlaceholder("Tap the title to toggle between Light and Dark Mode");
    event.target.style.minWidth = "20rem"; // Set minimum width when input loses focus
  };

  return (
    <input
      type="text"
      className="taskbar"
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{ minWidth: "150px" }} // Default minimum width
    />
  );
}

export default Taskbar;
