import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
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

        const style = {
            padding: '10px',
            margin: '5px',
            border: '#222 solid 1px',
            borderRadius: '3px',
            backgroundColor: 'green',
            color: 'white',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

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

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        let classes = [];

        if (this.state.people.length <= 2) {
            classes.push('red');
        }
        if (this.state.people.length <= 1) {
            classes.push('bold');
        }

        return (
            <StyleRoot>
                <div className="App">
                    <p className={classes.join(' ')}> Styling really works</p>
                    <button style={style} onClick={this.showPeopleHandler}>Toggle people</button>
                    {people}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
