const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const CLEAR = 'CLEAR';
const ADD_COUNTER = 'ADD_COUNTER';
const REMOVE_COUNTER = 'REMOVE_COUNTER';

const actions = {
    increment: () => {
        return {type: INCREMENT}
    },
    decrement: () => {
        return {type: DECREMENT}
    },
    clear: () => {
        return {type: CLEAR}
    },
    addCounter: () => {
        return {type: ADD_COUNTER}
    },
    removeCounter: () => {
        return {type: REMOVE_COUNTER}
    }
}

export default actions