import React, { useState } from "react";
import "./App.css";
import Taskbar from "./assets/Taskbar";
import Title from "./assets/Title.jsx";
import Task from "./assets/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (inputValue) => {
    setTasks([...tasks, inputValue]);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <Title />
      <Taskbar onInputChange={handleInputChange} />
      {tasks.map((task, index) => (
        <Task key={index} taskContent={task} onRemove={() => handleRemoveTask(index)} />
      ))}
    </div>
  );
}

export default App;
