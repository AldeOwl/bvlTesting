import React, {FC, useState} from 'react'
import {ErrorWrapper, Title, SaveButton} from './SaveTestErrorStyle'

type SaveTestErrorProps = {
  testError: object | string
  handleSaveButton: () => void
}

const SaveTestError: FC<SaveTestErrorProps> = (props) => {
  const {testError, handleSaveButton} = props

  const [showTestError, setShowTestError] = useState(false)

  return (
    <div className="App">
      <ErrorWrapper>
        <Title>Ошибка сохранения теста</Title>
        <div>
          <SaveButton onClick={handleSaveButton}>сохранить повторно</SaveButton>
          {testError && <span onClick={() => setShowTestError(true)}>Показать ошибку</span>}
          {showTestError && <p>{JSON.stringify(testError)}</p>}
        </div>
      </ErrorWrapper>
    </div>
  )
}

export default SaveTestError
