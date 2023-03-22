import React, { useState, useEffect } from 'react'
import { Button, CircularProgress, Grid, Typography } from '@mui/material'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'

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
      <div className='dash-title'>
        <h6>Pomodoro</h6>
      </div>
      {/* <div>{`${minutes.toString().padStart(2, '0')}:${remainingSeconds
        .toString()
        .padStart(2, '0')}`}</div> */}
      <div className='pomo-content'>
        <div className='progressbar'>
          <CircularProgressbar
            value={25 * 60 - seconds}
            text={`${minutes.toString().padStart(2, '0')}:${remainingSeconds
              .toString()
              .padStart(2, '0')}`}
          />
        </div>
        <div className='pomo-controles'>
          <Button
            startIcon={<PlayCircleFilledIcon />}
            onClick={handleStartStopClick}
          >
            {isRunning ? 'Stop' : 'Start'}
          </Button>
          <Button>Reset</Button>
        </div>
      </div>
    </div>
    // <Box
    //   sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    // >
    //   <Typography variant='h4' sx={{ mb: 2 }}>
    //     Pomodoro Clock
    //   </Typography>
    //   <CircularProgress
    //     variant='determinate'
    //     value={((minutes * 60 + seconds) / 1500) * 100}
    //     size={200}
    //     thickness={2}
    //     sx={{ mb: 2 }}
    //   >
    //     <Typography variant='h5'>{`${minutes
    //       .toString()
    //       .padStart(2, '0')}:${seconds
    //       .toString()
    //       .padStart(2, '0')}`}</Typography>
    //   </CircularProgress>
    //   <Button
    //     variant='contained'
    //     color='primary'
    //     onClick={handleStartStopClick}
    //   >
    //     Start
    //   </Button>
    // </Box>
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
