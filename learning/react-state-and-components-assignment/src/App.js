import React, {Component} from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';

class App extends Component {
    state = {
        username: 'Daniel',
    };

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    render() {
        return (
            <div className="App">
                <UserInput changeHandler={this.onChangeHandler} username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username="Selena" />
                <UserOutput username="Leo" />
            </div>
        );
    }
}

export default App;