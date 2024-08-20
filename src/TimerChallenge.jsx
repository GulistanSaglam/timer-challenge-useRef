import React, {useRef, useState} from 'react'

const TimerChallenge = ({title, targetTime}) => {
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
 
    function handleStart() {
        setTimerStarted(true);

      timer.current=setTimeout(()=>{
            setTimerExpired(true);
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(false);
    }

  return (
    <div className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p>{targetTime} second{targetTime >1 ? 's' : ''}</p>
        <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge</button>
        <p>
            {timerStarted ? 'Timer is running...' : 'Timer is inactive'}</p>
    </div>
  )
}

export default TimerChallenge