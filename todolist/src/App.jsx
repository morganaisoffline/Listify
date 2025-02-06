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

  return (
    <div className="app">
      <Title />
      <Taskbar onInputChange={handleInputChange} />
      {tasks.map((task, index) => (
        <Task key={index} taskContent={task} />
      ))}
    </div>
  );
}

export default App;
