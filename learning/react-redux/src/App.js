import React, { Component } from 'react';
import CounterWrap from './components/Counter/Counter-Wrap'

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CounterWrap store={this.props.store} />
            </div>
        );
    }
}



export default App