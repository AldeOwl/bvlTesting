import React, {Component} from 'react';
import './style.css';
import {getTest, sendTestResult} from '../../network/index';
import Question from '../../Components/Question';

class App extends Component {
  state = {
    questions: [],
    answers: {},
    target: 0
  }

  componentDidMount() {
    getTest()
        .then(res => this.setState({questions: [...res]}));
  }

  nextQuestions = (arr) => {
    const newAnswers = this.state.answers;
    newAnswers[this.state.questions[this.state.target].id] = arr;
    this.setState({answers: newAnswers});
    this.setState({target: this.state.target + 1});

    if (this.state.target === this.state.questions.length - 1) {
      sendTestResult(this.state.answers);
    }
  }

  render() {
    const {
      questions,
      target,
    } = this.state;
    console.log(questions.length);
    console.log(target);

    if (target === questions.length) {
      return (
          <div className="App">
            <div className='EndTest'>
              <p>тест завершен</p>
            </div>
          </div>
      )
    }

    return (
        <div className="App">
          <Question
              data={questions[target]}
              nextQuestions={this.nextQuestions}
          />
        </div>
    );
  }
}

export default App;
