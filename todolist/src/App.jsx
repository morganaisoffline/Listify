import React, { useState, useEffect } from "react";
import "./App.css";
import Taskbar from "./assets/Taskbar";
import Title from "./assets/Title.jsx";
import Task from "./assets/Task";
import "./style/Title.css";
import "./style/LightMode.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLightMode, setIsLightMode] = useState(false);

  const handleInputChange = (inputValue) => {
    setTasks([...tasks, inputValue]);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLightMode);
  }, [isLightMode]);

  return (
    <div className={`app ${isLightMode ? "light-mode" : ""}`}>
      <Title toggleLightMode={toggleLightMode} />
      <Taskbar onInputChange={handleInputChange} />
      {tasks.map((task, index) => (
        <Task key={index} taskContent={task} onRemove={() => handleRemoveTask(index)} className="task" />
      ))}
    </div>
  );
}

export default App;
