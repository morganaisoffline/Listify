import React from "react";
import Taskbar from "./Taskbar";

function Task({ taskContent }) {
  return (
    <div className="task">

      <p>{taskContent}</p>
    </div>
  );
}

export default Task