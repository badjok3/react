import * as actionTypes from './actions';

let initalState = {
    persons: []
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            {
                const newPerson = {
                    id: Math.random(), // not really unique but good enough here!
                    name: action.person.name,
                    age: action.person.age
                }
                
                return {
                    ...state,
                    persons: state.persons.concat(newPerson)
                }
            }
        case actionTypes.DELETE_PERSON:
            {
                return {
                    ...state,
                    persons: state.persons.filter(person => person.id !== action.id)
                }
            }
        default:
            {
                return state
            }
    }
}

export default reducer;