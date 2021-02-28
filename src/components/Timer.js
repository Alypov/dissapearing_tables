import React, { useState, useEffect } from 'react';

const Timer = () => {
  const inputTime = localStorage.getItem('inputTimeData').trim();

  const timeArray = inputTime.split(':');
  const initialMinutes = timeArray[0];
  const initialSeconds = timeArray[1];

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      if (seconds === 0 || minutes === 0) {
        localStorage.clear();
        window.location = '/';
      }
    }, 1000);
  });

  return (
    <div>
      {seconds < 0 || minutes < 0 ? (
        <div>Time is over</div>
      ) : (
        `${minutes}:${seconds}`
      )}
    </div>
  );
};
export default Timer;
