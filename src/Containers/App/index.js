import React, {Component} from 'react';
import './style.css';
import {getTest} from '../../network/index';
import Question from '../../Components/Question';

class App extends Component {
  state = {
    questions: [],
    answers: []
  }
  componentDidMount() {
    getTest()
        .then(res => this.setState({questions: [...res]}));
  }

  getTest = () => {
    // getTest()
    //   .then(res => this.setState({questions: [...res]}));
  }

  render() {
  const {
    questions
  } = this.state;

  console.log(questions);
  return (
    <div className="App">
      <Question data={questions[0]}/>
    </div>
  );
  }
}

export default App;
