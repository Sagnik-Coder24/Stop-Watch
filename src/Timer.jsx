import { useEffect, useState } from "react";

const Timer = ({ startTime, isRunning, setIsRunning }) => {
  const [clock, setClock] = useState(0);
  const [lastUpdateTime, setLastUpdateTime] = useState(startTime);

  useEffect(() => {
    const ticker = () => {
      const now = Date.now();
      setClock((prevClock) => prevClock + (now - lastUpdateTime));
      setLastUpdateTime(now);

      //   setClock((prevClock) => prevClock + 1);
    };

    let intervalId;
    if (isRunning) {
      intervalId = setInterval(ticker, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, lastUpdateTime]);

  const changeTicker = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setLastUpdateTime(Date.now());
    }
  };

  const reset = () => {
    setClock(0);
    setIsRunning(true);
    setLastUpdateTime(Date.now());
  };

  return (
    <div className="outer">
      <div className="inner" title="Start / Stop" onClick={changeTicker}>
        <div>
          <p>You have been on the site since:</p>
          <hr className="hr" />
          <div className="timer">
            <span>{Math.round(clock / 1000)}</span>
            {/* <span>{clock}</span> */}
            <p>Seconds.</p>
          </div>
        </div>
      </div>
      <button className="glow-button" onClick={reset}>
        RESET
      </button>
    </div>
  );
};

export default Timer;
