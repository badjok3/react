const initialStore = [{
    counter: 0,
    index: 0
}]

const reducer = (store = initialStore, action) => {
    if (action.type === 'INCREMENT') {
        return [
            ...store.slice(0, action.index),
            Object.assign({}, store[action.index], {
                value: store[action.index].value + 1
            }, ...store.slice(action.index + 1))
        ]
    }
    if (action.type === 'DECREMENT') {
        return [
            ...store.slice(0, action.index),
            Object.assign({}, store[action.index], {
                value: store[action.index].value - 1
            }, ...store.slice(action.index + 1))
        ]
    }
    if (action.type === 'CLEAR') {
        return [
            ...store.slice(0, action.index),
            Object.assign({}, store[action.index], {
                value: 0
            }, ...store.slice(action.index + 1))
        ]
    }
    if (action.type === 'ADD_COUNTER') {
        console.log(store);
        return [
            ...store,
            {
                index: store.length,
                counter: 0
            }
        ]
    }
    if (action.type === 'REMOVE_COUNTER') {
        return [
            ...store,
            store.slice(store.length - 1)
        ]
    }

    return store
}

export default reducer