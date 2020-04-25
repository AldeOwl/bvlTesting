import React, {Component} from 'react';
import './style.css';
import {getTest} from '../../network/index';
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
  }

  render() {
  const {
    questions,
    target,
  } = this.state;

  console.log(questions);
  console.log(this.state.answers);
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
