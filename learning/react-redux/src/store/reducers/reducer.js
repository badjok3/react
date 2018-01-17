const initialStore = [{
    counter: 0,
    index: 0
}]

const reducer = (store = initialStore, action) => {
    if (action.type === 'INCREMENT') {
        let currentStore = [...store];
        let counterIndex = currentStore.findIndex(c => c.index === action.index);
        currentStore[counterIndex].counter += 1; 
        
        return currentStore;
    }
    if (action.type === 'DECREMENT') {
        let currentStore = [...store];
        let counterIndex = currentStore.findIndex(c => c.index === action.index);
        currentStore[counterIndex].counter -= 1;

        return currentStore;
    }
    if (action.type === 'CLEAR') {
        let currentStore = [...store];
        let counterIndex = currentStore.findIndex(c => c.index === action.index);
        currentStore[counterIndex].counter = 0;
        
        return currentStore;
    }
    if (action.type === 'ADD_COUNTER') {
        
       let currentStore = [...store];
       currentStore.push({
           index: store.length,
           counter: 0
       });

       return currentStore;
    }
    if (action.type === 'REMOVE_COUNTER') {
        let currentStore = [...store];
        currentStore.splice(action.index, 1);

        return currentStore;
    }

    return store
}

export default reducer