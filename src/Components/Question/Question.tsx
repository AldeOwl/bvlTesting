import React, {useState} from 'react'
import {Wrap, Title, AnswerWrap, Answer, BtnRow, NextBtn, TitleWrap} from './QuestionStyle'
import Timer from '../Timer/Timer'

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
  const {id, difficulty} = data

  const [choose, setChoose] = useState<string[]>([])

  const chooseAnswer = (id: string) => {
    setChoose((prevChoose) =>
      prevChoose.includes(id) ? prevChoose.filter((item) => item !== id) : [...prevChoose, id]
    )
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
        <Timer questionDifficulty={difficulty} questionId={id} nextQuestionHandler={nextHandler} />
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
