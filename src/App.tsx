import React, { useState } from "react";
import Header from "./header";
import Nav from "./nav";
import History from "./history";
import Tomato from "./tomato";
import "./App.scss";

import period from "./period";

import { useInterval } from "beautiful-react-hooks";

const notifyEvent = new Event("notifyPom");

function App() {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(period);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayer = () => setIsPlaying(!isPlaying);

  const reset = () => {
    setIsPlaying(false);
    setTime(period);
  };

  const clearHistory = () => setCounter(0);

  useInterval(() => {
    if (isPlaying) {
      if (time === 1) {
        setCounter(counter + 1);
        reset();
        window.dispatchEvent(notifyEvent);
        return;
      }

      setTime(time - 1);
    }
  }, 1000);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Tomato time={time} togglePlayer={togglePlayer} />
        <Nav reset={reset} clearHistory={clearHistory} />
        <History tomatosCounter={counter} />
      </main>
    </div>
  );
}

export default App;
