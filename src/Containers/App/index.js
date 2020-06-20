import React, { Component } from 'react';
import './style.css';
import Login from '../../Components/Login';
import Test from '../Test';
import Introduction from '../../Components/Introduction';
import Loader from '../../Components/Spinner/loader';
import { getUserName, authorization, getTestInfo, getTestResult } from '../../network/index';


class App extends Component {
  state = {
    authorization: false,
    isLoading: false,
    name: null,
    step: 'start',
    id: '',
    startTime: null,
    endTime: null,
  }

  componentDidMount() {
    this.getName();
    this.checkTestID();
    getTestInfo().then(res => console.log(res))
    getTestResult().then(res => console.log(res))
  }

  checkTestID = () => {
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    this.setState({ id: parseInt(id) });
  }

  getAuth = (e, body) => {
    e.preventDefault();
    authorization(body);
    this.getName();
  }

  getName = () => {
    getUserName()
      .then(res => {
        if (res.user) {
          this.setState({ authorization: true, name: res.user, isLoading: false });
        } else {
          this.setState({ isLoading: false });
        }
      })
  }

  getStartTime = () => {

  }

  stepHandler = (step) => {
    this.setState({ step: step });
  }

  render() {
    const {
      authorization,
      isLoading,
      step,
      id,
    } = this.state;

    if (isLoading) {
      return (
        <Loader />
      )
    }

    if (!authorization) {
      return (
        <div className="App">
          <Login
            getAuth={this.getAuth}
          />
        </div>
      )
    }

    return (
      <div className="App">

        {step === 'start' && id === 231 &&
          < Introduction
            setStep={this.stepHandler}
          />
        }
        {step === 'test' &&
          < Test />
        }
      </div>
    );
  }
}

export default App;
