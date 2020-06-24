import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';
import Login from '../../Components/Login';
import Test from '../Test';
import Introduction from '../../Components/Introduction';
import Loader from '../../Components/Spinner/loader';
import { getUserName, authorization } from '../../network/index';


class App extends Component {
  state = {
    authorization: false,
    isLoading: false,
    name: null,
    id: '',
    startTime: null,
    endTime: null,
  }

  componentDidMount() {
    this.getName();
    this.checkTestID();
  }

  checkTestID = () => {
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    this.setState({ id: parseInt(id) });
  }

  getAuth = (e, body) => {
    e.preventDefault();
    authorization(body)
      .then(res => {
        if (res.status === 200) {
          this.getName();
        }
      })
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
      name,
    } = this.state;

    if (isLoading) {
      return (
        <Loader />
      )
    }

    if (authorization) {
      return (
        <div className="App">
          <Login
            getAuth={this.getAuth}
          />
        </div>
      )
    }

    return (
      <div className="App" >
        <Switch>
          <Route path='/result'>
            < Test />
          </Route>
          <Route
            exact
            path='/'
            render={(routeProps) =>
              <Introduction
                history={routeProps.history}
                name={name}
                setStep={this.stepHandler}
              />
            }
          />
          <Route path='/test'>
            < Test />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
