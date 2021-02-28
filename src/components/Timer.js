import React, { useState, useEffect } from 'react';
import styles from '../css/Timer.module.css';

const Timer = () => {
  const inputTime = localStorage.getItem('inputTimeData').trim();

  const timeArray = inputTime.split(':');
  const initialMinutes = timeArray[0];
  const initialSeconds = timeArray[1];

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds >= 1) {
        setSeconds(seconds - 1);
        clearInterval(interval);
      }
      if (seconds === 0) {
        setSeconds(59);
        clearInterval(interval);
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          clearInterval(interval);
        }
      }
      if (seconds <= 0 && minutes <= 0) {
        clearInterval(interval);
        setMinutes(0);
        setSeconds(0);
        localStorage.clear();
        window.location = '/';
      }
    }, 1000);
  });

  return (
    <div className={styles.container}>
      {seconds <= 0 && minutes <= 0 ? (
        <div>Time is over</div>
      ) : (
        `${minutes}:${seconds}`
      )}
    </div>
  );
};
export default Timer;
