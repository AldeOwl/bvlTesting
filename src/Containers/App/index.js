import React, { Component } from 'react';
import './style.css';
import Test from '../Test';
import Introduction from '../../Components/Introduction';


class App extends Component {
  state = {
    step: 'start',
    id: '',
  }

  componentDidMount() {
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get('id');
    this.setState({ id: parseInt(id) });
  }

  render() {
    const {
      step,
      id,
    } = this.state;
    return (
      <div className="App">
        {step === 'start' && id === 231 &&
          < Introduction />
        }
        {step === 'test' &&
          < Test />
        }
      </div>
    );
  }
}

export default App;
