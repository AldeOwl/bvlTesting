import React, {useEffect, useState} from 'react'

import {EndTest, Title, SaveButton} from './TestItemStyle'
import {getTest, sendTestResult} from '../../network/index'
import Question from '../../Components/Question/Question'
import Loader from '../../Components/Spinner/loader'
import FinalReport from '../../Components/FinalReport/FinalReport'

interface Response {
  id: number
  response: string
}

interface QuestionType {
  id: number
  text: string
  difficulty: number
  responses: Response[]
}

interface ResultType {
  points?: number
  percent?: number
  testTime?: number
  test?: number
  report?: string
}

const Test: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [answers, setAnswers] = useState<Record<string, string[] | number>>({})
  const [target, setTarget] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [result, setResult] = useState<ResultType>({})
  const [testTime, setTestTime] = useState<number>(0)
  const [testError, setTestError] = useState(false)

  useEffect(() => {
    const fetchTest = async () => {
      const res = await getTest()
      setQuestions(res)
      setIsLoading(false)
    }

    fetchTest()

    const timer = setInterval(() => setTestTime((prev) => prev + 1), 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSaveTest = (answers: Record<string, string[] | number>) => {
    sendTestResult(answers)
      .then((res) => {
        if (!res.id) {
          setTestError(true)
          console.log('error', res)
          return
        }
        setResult(res)
        setIsLoading(false)
      })
      .catch((e) => {
        setTestError(true), console.log('error', e)
      })
      .finally(() => setIsLoading(false))
  }

  const nextQuestions = (arr: string[]) => {
    const newAnswers = {...answers}
    const newTarget = target + 1
    newAnswers[questions[target].id] = [...arr]
    setAnswers(newAnswers)
    setTarget(newTarget)

    if (newTarget === questions.length) {
      newAnswers.test_time = testTime
      setIsLoading(true)
      handleSaveTest(newAnswers)
    }
  }

  const handleSaveButton = () => {
    const currentAnswers = {...answers}
    currentAnswers.test_time = testTime
    setIsLoading(true)
    handleSaveTest(currentAnswers)
  }

  if (isLoading) {
    return <Loader />
  }
  if (testError) {
    return (
      <div className="App">
        <EndTest>
          <Title>Ошибка сохранения теста</Title>
          <SaveButton onClick={handleSaveButton}>сохранить повторно</SaveButton>
        </EndTest>
      </div>
    )
  }

  if (target === questions.length && !isLoading) {
    return <FinalReport result={result} />
  }

  return <Question data={questions[target]} nextQuestions={nextQuestions} />
}

export default Test
