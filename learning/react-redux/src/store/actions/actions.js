const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const CLEAR = 'CLEAR';
const ADD_COUNTER = 'ADD_COUNTER';
const REMOVE_COUNTER = 'REMOVE_COUNTER';

const actions = {
    increment: (i) => {
        return {type: INCREMENT, index: i}
    },
    decrement: (i) => {
        return {type: DECREMENT, index: i}
    },
    clear: (i) => {
        return {type: CLEAR, index: i}
    },
    addCounter: () => {
        return {type: ADD_COUNTER}
    },
    removeCounter: (i) => {
        return {type: REMOVE_COUNTER, index: i}
    }
}

export default actions