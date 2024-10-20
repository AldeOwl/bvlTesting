import React, {useEffect, useState} from 'react'

import {Wrap} from './TestWrapStyle'
import Test from '../../Containers/Test/TestItem'
import Introduction from '../Introduction/Introduction'
import {getUserName} from '../../network'

interface TestWrapProps {
  name: string
  authorization: boolean
}

const TestWrap: React.FC<TestWrapProps> = ({name, authorization}) => {
  const [step, setStep] = useState<'intro' | 'test'>('intro')

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

  return (
    <Wrap>
      {step === 'intro' && <Introduction name={name} setStep={setStep} />}
      {step === 'test' && <Test />}
    </Wrap>
  )
}

export default TestWrap
