import { useEffect } from "react";

function Title({ toggleLightMode }) {
  return (
    <header>
      <h1 onClick={toggleLightMode}>Listify</h1>
      <h2>A simple, sleek to-do list app</h2>
    </header>
  );
}

export default Title;
