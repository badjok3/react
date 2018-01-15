import React, { Component } from 'react';

import Person from './Person/Person';

import './App.css';

class App extends Component {
    state = {
        people: [
            'Daniel',
            'Selena',
            'Leo',
        ],
        showPeople: false
    };

    onChangeHandler = (e) => {
        this.setState({ people: [
            e.target.value,
            'Selena',
            'Leo'
        ] })
    };

    showPeopleHandler = () => {
        let show = !this.state.showPeople;

        this.setState({
            showPeople: show
        })
    }

    deletePersonHandler = (personIndex) => {
        const people = [...this.state.people];
        people.splice(personIndex, 1);
        this.setState({ people: people });
    }

    render() {
        let people = null;

        if (this.state.showPeople) {
            people = (
                <div>
                    {this.state.people.map((n, index) => <Person deletePerson={() => { this.deletePersonHandler(index)} } name={n} key={index} changeHandler={this.onChangeHandler} />)}
                </div>
            )
        }

        return (
            <div className="App">
                <button className="btn" onClick={this.showPeopleHandler}>Toggle people</button>
                {people}
            </div>
        );
    }
}

export default App;
