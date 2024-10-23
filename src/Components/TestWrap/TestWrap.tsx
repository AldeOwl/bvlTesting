import React, {useCallback, useEffect, useState} from 'react'

import {Wrap} from './TestWrapStyle'
import TestItem from '../../Containers/Test/TestItem'
import Introduction from '../Introduction/Introduction'
import {getUserName, sendTestResult} from '../../network'
import FinalReport from '../FinalReport/FinalReport'
import SaveTestError from '../SaveTestError/SaveTestError'
import Loader from '../Spinner/loader'

interface TestWrapProps {
  name: string
  authorization: boolean
}

type Steps = 'intro' | 'test' | 'report'

type ResultType = {
  points?: number
  percent?: number
  testTime?: number
  test?: number
  report?: string
}

const TestWrap: React.FC<TestWrapProps> = ({name, authorization}) => {
  const [step, setStep] = useState<Steps>('intro')
  const [saveTestError, setSaveTestError] = useState(false)
  const [testError, setTestError] = useState('')
  const [result, setResult] = useState<ResultType>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [answers, setAnswers] = useState<Record<string, string[] | number>>({})
  const [startTestTime, setStartTestTime] = useState<number>(0)
  const [endTestTime, setEndTestTime] = useState<number>(0)

  if (!authorization) {
    window.location.hash = '/'
    window.location.reload()
    return null
  }

  useEffect(() => {
    const interval = setInterval(getUserName, 60000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (step === 'test') {
      setStartTestTime(Date.now())
    }
  }, [step])

  const saveTest = useCallback(() => {
    if (!endTestTime) {
      setEndTestTime(Date.now())
    }

    const currentEndTestTime = endTestTime || Date.now()
    const testTime = Math.floor((currentEndTestTime - startTestTime) / 1000)

    const currentAnswers = {...answers, test_time: testTime, end_test_time: currentEndTestTime}

    setSaveTestError(false)
    sendTestResult(currentAnswers)
      .then((res) => {
        if (!res.id) {
          setSaveTestError(true)
          setTestError(res)
          console.log('error', res)
          return
        }
        setResult(res)
        setIsLoading(false)
        setStep('report')
      })
      .catch((e) => {
        setSaveTestError(true)
        setTestError(e)
        console.log('error', e)
      })
      .finally(() => setIsLoading(false))
  }, [startTestTime, endTestTime, answers])

  const handleSaveButton = useCallback(() => {
    setIsLoading(true)
    saveTest()
  }, [answers, saveTest])

  const loadingHandler = useCallback(
    (status: boolean) => {
      setIsLoading(status)
    },
    [setIsLoading]
  )

  const handleAnswers = useCallback(
    (questionId: number, answer: Array<string>) => {
      const newAnswers = {...answers}
      newAnswers[questionId] = [...answer]
      setAnswers(newAnswers)
    },
    [answers]
  )

  if (saveTestError) {
    return <SaveTestError testError={testError} handleSaveButton={handleSaveButton} />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Wrap>
      {step === 'intro' && <Introduction name={name} setStep={setStep} />}
      {step === 'test' && (
        <TestItem loadingHandler={loadingHandler} handleAnswer={handleAnswers} handleTestEndded={saveTest} />
      )}
      {step === 'report' && <FinalReport result={result} />}
    </Wrap>
  )
}

export default TestWrap
