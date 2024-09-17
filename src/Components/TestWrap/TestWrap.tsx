import React, {useState} from 'react'

import {Wrap} from './TestWrapStyle'
import Test from '../../Containers/Test/TestItem'
import Introduction from '../Introduction/Introduction'

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

  return (
    <Wrap>
      {step === 'intro' && <Introduction name={name} setStep={setStep} />}
      {step === 'test' && <Test />}
    </Wrap>
  )
}

export default TestWrap
