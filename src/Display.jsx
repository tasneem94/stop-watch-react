export const Display = ({ elapsedTime }) => {
  const displayTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;

    return `${hours}:${minutes}:${seconds}:${miliseconds}`;
  };

  return <div className="display">{displayTime()}</div>;
};
