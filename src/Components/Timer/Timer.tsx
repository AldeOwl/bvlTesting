import React, {useCallback, useEffect, useState} from 'react'

import {Time} from './TimerStyle'

interface TimerProps {
  questionDifficulty: number
  questionId: number
  nextQuestionHandler: () => void
}

const Timer: React.FC<TimerProps> = (props) => {
  const {questionDifficulty, questionId, nextQuestionHandler} = props

  const [time, setTime] = useState<number>(-1)

  useEffect(() => {
    setTimer(questionDifficulty)
  }, [questionDifficulty, questionId])

  useEffect(() => {
    const timerInterval = setInterval(() => setTime((prevTime) => prevTime - 1), 1000)

    return () => {
      console.log('clear')
      clearInterval(timerInterval)
    }
  }, [])

  useEffect(() => {
    if (time === 0) {
      setTime(-1)
      nextHandler()
    }
  }, [time])

  const setTimer = useCallback((val: number) => {
    if (val === 0) setTime(60)
    if (val === 1) setTime(90)
    if (val === 2) setTime(120)
  }, [])

  const nextHandler = () => {
    nextQuestionHandler()
  }

  if (!questionId) return null

  return (
    <div>
      <Time>{time}</Time>
    </div>
  )
}

export default Timer
