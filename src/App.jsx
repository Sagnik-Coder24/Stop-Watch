import logo from "./assets/react.svg";
import "./App.css";
import Timer from "./Timer";
import { useState } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={`App-logo ${isRunning ? "App-logo-spin" : ""}`}
          alt="logo"
        />
      </header>
      <Timer
        startTime={Date.now()}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
    </div>
  );
}

export default App;
