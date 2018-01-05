import React, { Component } from 'react';
import Person from './Person/Person';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {name: 'Daniel', age: 20},
            {name: 'Miley', age: 23}
        ]
    };

    switchNameHandler = (name) => {
        this.setState( {
            persons: [
            {name: name, age: 20},
            {name: 'Maria', age: 23}
            ]
        });
    };

    onChangeHandler = (e) => {
        e.preventDefault();

        this.setState( {
            persons: [
                {name: e.target.value, age: 20},
                {name: 'Maria', age: 23}
            ]
        })
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <button onClick={this.switchNameHandler.bind(this, 'Joro')}>Switch Name</button>
          <Person click={this.switchNameHandler.bind(this, 'Petur')} change={this.onChangeHandler} name={this.state.persons[0].name} />
          <Person click={this.switchNameHandler.bind(this, 'Zdraviq')} name={this.state.persons[1].name} />
      </div>
    );
  }
}

export default App;
