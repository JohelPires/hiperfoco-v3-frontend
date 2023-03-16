import React, { useState, useEffect } from 'react'

function PomodoroClock() {
  const [seconds, setSeconds] = useState(25 * 60) // default value is 25 minutes
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [isRunning])

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  function handleStartStopClick() {
    setIsRunning((prevIsRunning) => !prevIsRunning)
  }

  return (
    <div className='PomodoroContainer'>
      <h2>Pomodoro Clock</h2>
      <div>{`${minutes.toString().padStart(2, '0')}:${remainingSeconds
        .toString()
        .padStart(2, '0')}`}</div>
      <button onClick={handleStartStopClick}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <div>Stats ... </div>
    </div>
  )
}

// export default Clock;

// export default Clock;

// function PomodoroClock() {
//   return (
//     <div className='PomodoroContainer Container'>
//       <h2>Pomodoro Clock</h2>
//     </div>
//   )
// }

export default PomodoroClock
