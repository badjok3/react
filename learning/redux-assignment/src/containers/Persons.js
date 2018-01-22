import React from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from "react-redux";
import * as actionTypes from '../store/actions';

const persons = (props) => {
    return (
        <div>
            <AddPerson personAdded={props.addPerson} />
            {props.persons.map(person => (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    clicked={() => props.deletePerson(person.id)} />
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, person: {name: name, age: age }}),
        deletePerson: (id) => dispatch({ type: actionTypes.DELETE_PERSON, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(persons);