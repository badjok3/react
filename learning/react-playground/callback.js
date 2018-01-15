const callback = () => {
    console.log('execute callback func');
}

const tryMe = (func) => {
    console.log('casual function gets executed');

   return func
};

tryMe(callback)();