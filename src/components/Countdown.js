import React, { useState, useEffect, useRef } from 'react';

const Countdown = () => {
  const intervalRef = useRef(null);

  const [timer, setTimer] = useState('00:00');

  function getTimerReminning(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      seconds,
      minutes,
    };
  }

  function startTimer(deadline) {
    let { total, seconds, minutes } = getTimerReminning(deadline);
    if (total > 0) {
      setTimer(
        (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      );
    } else {
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime) {
    setTimer('00:50');
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
  }

  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  }

  // useEffect(() => {
  //   clearTimer(getDeadlineTime());
  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div>
      Counter
      <div>{timer}</div>
    </div>
  );
};

export default Countdown;
