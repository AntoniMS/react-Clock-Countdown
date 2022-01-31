import React, { useEffect, useState } from "react";

import "./DigitalClock.css";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="digital-clock">
      <h2>Digital Clock</h2>
      <div><h3>{clockState}</h3></div>
    </div>
  );
};

export default DigitalClock;