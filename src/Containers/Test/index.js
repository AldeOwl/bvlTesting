import React, { Component } from 'react';
import {
  EndTest,
} from './style';
import { getTest, sendTestResult } from '../../network/index';
import Question from '../../Components/Question';

class Test extends Component {
  state = {
    questions: [],
    answers: {},
    target: 0
  }

  componentDidMount() {
    getTest()
      .then(res => this.setState({ questions: [...res] }));
  }

  nextQuestions = (arr) => {
    const newAnswers = this.state.answers;
    newAnswers[this.state.questions[this.state.target].id] = arr;
    this.setState({ answers: newAnswers });
    this.setState({ target: this.state.target + 1 });

    if (this.state.target === this.state.questions.length - 1) {
      sendTestResult(this.state.answers);
    }
  }

  render() {
    const {
      questions,
      target,
    } = this.state;

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
