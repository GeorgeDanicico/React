import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [timerTime, setTimerTime] = useState<number>(7200);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [hours, setHours] = useState<number>(2);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  let timeout = null;

  const convertTimeToString: () => string = () => {
    let seconds = timerTime % 60 ;
    let minutes = Math.floor(timerTime / 60) % 60;
    let hours = Math.floor(Math.floor(timerTime / 60) / 60);

    const secondsS = seconds > 9 ? String(seconds) : "0" + String(seconds);
    const minutesS = minutes > 9 ? String(minutes) : "0" + String(minutes);
    const hoursS = hours > 9 ? String(hours) : "0" + String(hours)

    return hoursS + ":" + minutesS + ":" + secondsS;
  }

  useEffect(() => {
    if (startTimer) {
      if (timerTime > 0) {
        setTimeout(() => {
          setTimerTime(prev => prev - 1);
        }, 1000);
      }
    }
  }, [startTimer, timerTime]);

  const handleStart: () => void = () => {
    setStartTimer(true);
  };

  const handleStop: () => void = () => {
    setStartTimer(false);
  }

  const handleReset = () => {
    setTimerTime(0);
    setStartTimer(false);
  };

  const handleChange: (e: React.ChangeEvent<HTMLInputElement>, c: number) => void = (e, c) => {
    const power: number = Math.pow(60, (c - 1));
    let val: number = 0;
    if (c === 3) {
      val = hours;
      setHours(parseInt(e.target.value));
    }
    else if (c === 2) {
      val = minutes;
      setMinutes(parseInt(e.target.value));
    }
    else if (c === 1) {
      val = seconds;
      setSeconds(parseInt(e.target.value));
    }

    setTimerTime(prev => prev - val * power   + parseInt(e.target.value) * power);
  }

  return (
    <div className="timer-container">
      <div className="timer">
        {convertTimeToString()}
      </div>

      <div className="input-container">
        <input placeholder="Hours" type="number" min="0" max="24" value={hours} onChange={(e) => handleChange(e, 3)}/>
        <input placeholder="Minutes" type="number" min="0" max="59" value={minutes} onChange={(e) => handleChange(e, 2)}/>
        <input placeholder="Seconds" type="number" min="0" max="59" value={seconds} onChange={(e) => handleChange(e, 1)}/>
      </div>

      <div className="buttons-container">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
