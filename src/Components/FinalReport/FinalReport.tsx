import React from 'react'
import {EndTest, Title, Detail, Message} from './FinalReportStyle'

interface FinalReportProps {
  result: {
    points?: number
    percent?: number
    testTime?: number
    test?: number
    report?: string
  }
}

const FinalReport: React.FC<FinalReportProps> = ({result}) => {
  const {points, testTime, test, report} = result
  const getMessage = (points: number | undefined) => {
    if (!points) return ''
    if (points === 25) return 'Алексей Беленький, ты в курсе, что президенту нельзя отвечать на вопросы?'
    if (points > 19 && points < 25) return 'Да ты крутой! Наверное играешь в БВЛ лет двадцать?'
    if (points > 14 && points < 20) return 'Неплохо, но тебе стоит побольше узнать о БВЛ. Придет время - пригодится.'
    if (points > 9 && points < 15)
      return 'Мы ожидали от тебя больше. Похоже, что ты просто приезжаешь к началу игр и не задерживаешься потом? '
    if (points < 10) return 'Эй, а ты точно из БВЛ?'
  }

  const formatTime = (seconds: number | undefined) => {
    if (!seconds) return {minutes: 0, remainingSeconds: 0}
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return {minutes, remainingSeconds}
  }

  const time = formatTime(testTime)

  return (
    <div className="App">
      <EndTest>
        <Title>тест завершен</Title>
        {points && (
          <p>
            {points} баллов ({result.percent} %)
          </p>
        )}
        {testTime && (
          <p>
            Время: <span>{time.minutes}</span> мин. <span>{time.remainingSeconds}</span> сек.
          </p>
        )}
        {test === 231 && <Message>{getMessage(points)}</Message>}
        {report && (
          <Detail href={report} target="_blank">
            ДЕТАЛИЗАЦИЯ
          </Detail>
        )}
      </EndTest>
    </div>
  )
}

export default FinalReport
