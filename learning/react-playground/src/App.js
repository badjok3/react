import React, { Component } from 'react';

import Person from './Person/Person';

import './App.css';

class App extends Component {
    state = {
        people: [
            { id: 'a1', name: 'Daniel', },
            { id: 'b1', name: 'Selena', },
            { id: 'c1', name: 'Leo' }
        ],
        showPeople: false
    };

    onChangeHandler = (e, id) => {
        const personIndex = this.state.people.findIndex(p => p.id === id);
        const person = {
            ...this.state.people[personIndex]
        };
        person.name = e.target.value;

        const people = [...this.state.people];
        people[personIndex] = person
        
        this.setState({
            people: people
        })
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
                    {this.state.people.map((person, index) => <Person 
                    deletePerson={() => this.deletePersonHandler(index)} 
                    name={person.name}
                    key={person.id} 
                    changeHandler={(e) => this.onChangeHandler(e, person.id)} />)}
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
