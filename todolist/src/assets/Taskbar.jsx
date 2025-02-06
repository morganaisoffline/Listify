import "../style/Taskbar.css";
import { useState, useEffect, useRef } from "react";

function Taskbar({ onInputChange }) {
  const [placeholder, setPlaceholder] = useState("Tap the title to toggle between Light and Dark Mode");
  const inputRef = useRef(null);

  // Function to calculate width of placeholder text
  const calculateWidth = (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "16px Arial";  // Adjust this font to match the taskbar input style
    const textWidth = context.measureText(text).width;
    return Math.max(320, textWidth + 16); // Ensure a minimum width of 320px
  };

  // Adjust initial width based on placeholder text
  useEffect(() => {
    if (inputRef.current) {
      const initialWidth = calculateWidth(placeholder);
      inputRef.current.style.minWidth = `${initialWidth}px`;
    }
  }, [placeholder]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value.trim() === "") {
        return;
      }
      onInputChange(event.target.value);
      event.target.value = "";
      event.target.style.minWidth = "20rem"; // Reset width after adding task
    }
    event.target.style.minWidth = Math.max(320, (event.target.value.length + 1) * 7) + "px";
  };

  const handleFocus = (event) => {
    setPlaceholder("Add a task...");
    event.target.style.minWidth = Math.max(320, (event.target.value.length + 1) * 7) + "px";
  };

  const handleBlur = (event) => {
    setPlaceholder("Tap the title to toggle between Light and Dark Mode");
    event.target.style.minWidth = "20rem"; // Set minimum width when input loses focus
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className="taskbar"
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{ minWidth: "20rem" }} // Default minimum width
    />
  );
}

export default Taskbar;
