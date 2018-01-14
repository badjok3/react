import React, { Component } from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <UserOutput username="Zdravko" />
          <UserOutput username="Daniel" />
          <UserOutput username="Miley" />
      </div>
    );
  }
}

export default App;
