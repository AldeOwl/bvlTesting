import React, {useEffect, useState} from 'react'
import {Wrap, Title, AnswerWrap, Answer, BtnRow, NextBtn, TitleWrap, Time} from './QuestionStyle'

interface Response {
  id: number
  response: string
}

interface QuestionData {
  id: number
  text: string
  difficulty: number
  responses: Response[]
}

interface QuestionProps {
  data: QuestionData
  nextQuestions: (chosenAnswers: string[]) => void
}

const Question: React.FC<QuestionProps> = ({data, nextQuestions}) => {
  const [choose, setChoose] = useState<string[]>([])
  const [time, setTime] = useState<number>(-1)

  useEffect(() => {
    setTimer(data.difficulty)
    const timerInterval = setInterval(() => setTime((prevTime) => prevTime - 1), 1000)

    return () => clearInterval(timerInterval)
  }, [data.id])

  useEffect(() => {
    if (time === 0) {
      setTime(-1)
      nextHandler()
    }
  }, [time])

  const chooseAnswer = (id: string) => {
    setChoose((prevChoose) =>
      prevChoose.includes(id) ? prevChoose.filter((item) => item !== id) : [...prevChoose, id]
    )
  }

  const setTimer = (val: number) => {
    if (val === 0) setTime(60)
    if (val === 1) setTime(90)
    if (val === 2) setTime(120)
  }

  const nextHandler = () => {
    nextQuestions(choose)
    setChoose([])
  }

  if (!data) return null

  return (
    <Wrap>
      <TitleWrap>
        <Title>{data.text}</Title>
        <Time>{time}</Time>
      </TitleWrap>
      <AnswerWrap>
        {data.responses.map((item) => (
          <Answer key={item.id} active={choose.includes(item.response)} onClick={() => chooseAnswer(item.response)}>
            <p>{item.response}</p>
          </Answer>
        ))}
        <BtnRow>
          <NextBtn onClick={nextHandler}>Дальше</NextBtn>
        </BtnRow>
      </AnswerWrap>
    </Wrap>
  )
}

export default Question
