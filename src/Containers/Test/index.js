import React, { Component } from 'react';
import {
  EndTest,
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
    const newAnswers = this.state.answers;
    newAnswers[this.state.questions[this.state.target].id] = arr;
    this.setState({ answers: newAnswers });
    this.setState({ target: this.state.target + 1 });

    if (this.state.target === this.state.questions.length - 1) {
      const data = this.state.answers;
      data.test_time = this.testTime;
      sendTestResult(data);
    }
  }

  render() {
    const {
      questions,
      target,
      isLoading,
    } = this.state;

    if (isLoading) {
      return (
        <Loader />
      )
    }

    if (target === questions.length) {
      return (
        <div className="App">
          <EndTest>
            <p>тест завершен</p>
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
