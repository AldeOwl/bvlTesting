import React from 'react';
import './style.css';
import {getTest} from '../../network/index';

function App() {
  getTest()
      .then(res => console.log(res));
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>Hello world</p>
    </div>
  );
}

export default App;
