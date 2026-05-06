function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return a ** b;
}

// Фуннеция высшего порядка
function calculate(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}

let res = calculate(3, 5, add); // add
console.log(res); // 8
res = calculate(3, 5, subtract); // subtract
console.log(res); // -2
res = calculate(3, 5, power); // power
console.log(res); // 243