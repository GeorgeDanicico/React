import React, { useEffect, useState, useCallback } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import './App.css';

const useStyles = makeStyles({
      button: {
        margin: '0 10px',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      }
});

const App: React.FC = () => {
  const classes = useStyles();

  const [timerTime, setTimerTime] = useState<number>(7200);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [hours, setHours] = useState<number>(2);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const alarm = new Audio('/alarm.mp3');

  const convertTimeToString: () => string = () => {
    let seconds = timerTime % 60 ;
    let minutes = Math.floor(timerTime / 60) % 60;
    let hours = Math.floor(Math.floor(timerTime / 60) / 60);

    const secondsS = seconds > 9 ? String(seconds) : "0" + String(seconds);
    const minutesS = minutes > 9 ? String(minutes) : "0" + String(minutes);
    const hoursS = hours > 9 ? String(hours) : "0" + String(hours)

    return hoursS + ":" + minutesS + ":" + secondsS;
  }

  const updateTimes = () => {
    let s = (timerTime - 1) % 60 ;
    let m = Math.floor((timerTime - 1) / 60) % 60;
    let h = Math.floor(Math.floor((timerTime - 1) / 60) / 60);

    if (seconds !== s) {
      setSeconds(s);
    }
    if (minutes !== m) {
      setMinutes(m);
    }
    if (hours !== h) {
      setHours(h);
    }

    setTimerTime(prev => prev - 1);
  }

  useEffect(() => {
    if (startTimer) {
      if (timerTime > 0) {
        setTimeout(() => {
          updateTimes();
        }, 1000);
      } else {
        setStartTimer(false);
        alarm.play();
      }
    }
  }, [startTimer, timerTime]);

  const handleStart: () => void = () => {

    if (timerTime > 0) {
      setStartTimer(true);
    }
  };

  const handleStop: () => void = () => {
    setStartTimer(false);
  }

  const handleReset = () => {
    setTimerTime(0);
    setStartTimer(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
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
        <Button className={classes.button} variant="contained" onClick={handleStart}>
          Start
        </Button>

        <Button className={classes.button} variant="contained" onClick={handleStop}>
          Stop
        </Button>
        <Button className={classes.button} variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
