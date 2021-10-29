import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import './style.css';
import Login from '../../Components/Login';
import TestWrap from '../../Components/TestWrap';
import Result from '../Results';
import Loader from '../../Components/Spinner/loader';
import {getUserName, authorization} from '../../network/index';


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
    this.setState({id: parseInt(id)});
  }

  getAuth = (e, body) => {
    e.preventDefault();
    authorization(body)
      .then(res => {
        if (res.status === 200) {
          this.getName();
          this.props.history.push('/');
        }
      })
  }

  getName = () => {
    getUserName()
      .then(res => {
        if (res.id) {
          this.setState({authorization: true, name: res.name, isLoading: false});
        } else {
          this.setState({isLoading: false});
        }
      })
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

    return (
      <div className="App" >
        {!authorization ?
          <Switch>
            <Route path='/result'>
              < Result />
            </Route>
            <Route>
              <Login
                getAuth={this.getAuth}
              />
            </Route>
          </Switch>
          :
          <Switch>
            <Route path='/result'>
              < Result />
            </Route>
            <Route>
              < TestWrap
                name={name}
              />
            </Route>
          </Switch>
        }
      </div>
    );
  }
}

export default withRouter(App);
