import React from "react";
import "../style/Task.css";

function Task({ taskContent, onRemove }) {
  return (
    <div className="task" onClick={onRemove}>
      <p>{taskContent}</p>
    </div>
  );
}

export default Task;