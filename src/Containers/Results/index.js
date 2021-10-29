import React, { Component } from 'react';
import Loader from '../../Components/Spinner/loader';

class Result extends Component {
  state = {
    isLoading: true,

  }

  componentDidMount() {

  }

  render() {
    const {
      isLoading,
    } = this.state;


    if (isLoading) {
      return (
        <Loader />
      )
    }

    return (
      <div></div>
    );
  }
}

export default Result;
