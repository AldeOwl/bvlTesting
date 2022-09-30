import React, { Component } from 'react';
import {
  EndTest,
  Title,
  Message,
  Detail,
} from './style';
import { getTest, sendTestResult } from '../../network/index';
import Question from '../../Components/Question';
import Loader from '../../Components/Spinner/loader';

class Test extends Component {
  testTime = 0;
  timer = {};
  state = {
    questions: [],
    answers: {},
    target: 0,
    isLoading: true,
    result: {},
  }

  componentDidMount() {
    getTest()
      .then(res => this.setState({ questions: [...res], isLoading: false }));
    this.timer = setInterval(() => this.testTime++, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  nextQuestions = (arr) => {
    const newAnswers = {...this.state.answers};
    newAnswers[this.state.questions[this.state.target].id] = [...arr];
    this.setState({ answers: newAnswers });
    this.setState({ target: this.state.target + 1 });

    if (this.state.target === this.state.questions.length - 1) {
      const data = this.state.answers;
      data.test_time = this.testTime;
      this.setState({ isLoading: true })
      sendTestResult(data)
        .then(res => {
          this.setState({ result: res, isLoading: false })
        }
        ).finally(() => this.setState({ isLoading: false }))
    }
  }

  getMessage = (points) => {
    if (points === 25) return 'Алексей Беленький, ты в курсе, что президенту нельзя отвечать на вопросы?';
    if (points > 19 && points < 25) return 'Да ты крутой! Наверное играешь в БВЛ лет двадцать?';
    if (points > 14 && points < 20) return 'Неплохо, но тебе стоит побольше узнать о БВЛ. Придет время - пригодится.';
    if (points > 9 && points < 15) return 'Мы ожидали от тебя больше. Похоже, что ты просто приезжаешь к началу игр и не задерживаешься потом? ';
    if (points < 10) return 'Эй, а ты точно из БВЛ?';
  }

  render() {
    const {
      questions,
      target,
      isLoading,
      result,
    } = this.state;

    if (isLoading) {
      return (
        <Loader />
      )
    }

    if (target === questions.length && !isLoading) {
      return (
        <div className="App">
          <EndTest>
            <Title>тест завершен</Title>
            {result.points &&
              <p>{result.points} баллов ({result.percent} %)</p>
            }
            {result.testTime &&
              <p>Время: <span>{(result.testTime / 60).toFixed(0)}</span> мин. <span>{(result.testTime - (result.testTime / 60).toFixed(0) * 60)}</span> сек.</p>
            }
            {result.test === 231 && <Message>{this.getMessage(result.points)}</Message>}
            {result.report &&
            <Detail href={result.report} target='_blanck'>
              ДЕТАЛИЗАЦИЯ
            </Detail>
            }
          </EndTest>
        </div>
      )
    }

    return (
      <Question
        data={questions[target]}
        nextQuestions={this.nextQuestions}
      />
    );
  }
}

export default Test;
