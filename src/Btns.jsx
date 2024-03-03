export const Btns = (props) => {
  const start = () => {
    props.setIsRunning(true);
    props.startTimeRef.current = Date.now() - props.elapsedTime;
  };

  const stop = () => {
    props.setIsRunning(false);
  };

  const reset = () => {
    props.setIsRunning(false);
    props.setElapsedTime(0);
  };

  return (
    <div className="btn-container">
      <button className="start-btn" onClick={start}>
        Start
      </button>
      <button className="stop-btn" onClick={stop}>
        Stop
      </button>
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
