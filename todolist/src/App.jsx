import React, { useState, useEffect } from "react";
import "./App.css";
import Taskbar from "./assets/Taskbar";
import Title from "./assets/Title.jsx";
import Task from "./assets/Task";
import Footer from "./assets/Footer.jsx";
import "./style/Title.css";
import "./style/LightMode.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Error parsing tasks from localStorage", error);
      return [];
    }
  });

  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); 

  const handleInputChange = (inputValue) => {
    setTasks((prevTasks) => [...prevTasks, inputValue]);
  };

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const toggleLightMode = () => {
    setIsLightMode((prevMode) => !prevMode);
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
      <Footer />
    </div>
  );
}

export default App;
