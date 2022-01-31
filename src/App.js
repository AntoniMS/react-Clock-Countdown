import React from "react";
import StopWatch from "./components/StopWatch/StopWatch";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import CountDown from "./components/CountDown/CountDown";

import "./App.css";



const App = () => {
  return (
    <div className="App-header">
      <DigitalClock />
      <CountDown />
      <StopWatch />
    </div>
  );
};

export default App;
