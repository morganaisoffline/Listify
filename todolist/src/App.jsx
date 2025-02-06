import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Taskbar from "./assets/Taskbar.jsx";
import Title from "./assets/Title.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="root">
        <Title />
        <Taskbar />
        </div>
    </>
  );
}

export default App;
