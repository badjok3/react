function calculate (n) {
    return (m) => {
        return m * n;
    }
}

let calc = calculate(3);
console.log(calc(4)); // 12