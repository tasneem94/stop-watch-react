import { useState, useRef, useEffect } from "react";
import { Btns } from "./Btns";
import { Display } from "./Display";

export const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  return (
    <div className="main-container">
      <Display elapsedTime={elapsedTime} />

      <Btns
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
        startTimeRef={startTimeRef}
      />
    </div>
  );
};
