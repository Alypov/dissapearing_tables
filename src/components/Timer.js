import React, { useState, useEffect } from 'react';

const Timer = () => {
  const inputTime = localStorage.getItem('inputTimeData').trim();

  const timeArray = inputTime.split(':');
  const initialMinutes = timeArray[0];
  const initialSeconds = timeArray[1];

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  const [quit, setQuit] = useState(false);

  useEffect(() => {
    if (seconds !== 0 && minutes !== 0) {
      let interval = setInterval(() => {
        if (seconds >= 1) {
          setSeconds(seconds - 1);
          clearInterval(interval);
          console.log(seconds);
        }
        if (seconds === 0) {
          setSeconds(59);
          clearInterval(interval);
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            //   clearInterval(interval);
          }
        }
        if (seconds === 0 && minutes === 0) {
          localStorage.clear();
          clearInterval(interval);
          window.location = '/';
        }
      }, 1000);
    } else {
      setQuit(true);
    }
  });

  return <div>{quit ? <div>Time is over</div> : `${minutes}:${seconds}`}</div>;
};
export default Timer;
