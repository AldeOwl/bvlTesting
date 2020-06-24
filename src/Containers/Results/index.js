import React, { Component } from 'react';
import {
  EndTest,
  Title,
  Message,
  Detail,
} from './style';
import { sendTestResult } from '../../network/index';
import Question from '../../Components/Question';
import Loader from '../../Components/Spinner/loader';

class Result extends Component {
  state = {
    isLoading: true,
    result: [],
  }

  componentDidMount() {
    sendTestResult()
      .then(res => this.setState({ result: res, isLoading: false }));
  }

  render() {
    const {
      result,
      isLoading,
    } = this.state;

    console.log(result);

    if (isLoading) {
      return (
        <Loader />
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

export default Result;
