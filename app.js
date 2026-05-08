const operations = [100, -20, 7, -30, 50];

// let balance = 0;
// for (const operation of operations) {
//     balance += operation;
// }
// console.log(balance); // 107

const finalBalance = operations.reduce((acc, operation, i) => {
    console.log(`i: ${i}, acc: ${acc}, operation: ${operation}`);
    return acc += operation;
}, 0);
console.log(finalBalance); // 107
// i: 0, acc: 0, operation: 100
// i: 1, acc: 100, operation: -20
// i: 2, acc: 80, operation: 7
// i: 3, acc: 87, operation: -30
// i: 4, acc: 57, operation: 50

const minElement = operations.reduce((acc, operation, i) => {
    if (operation > acc) {
        return acc;
    } else {
        return operation;
    }
}, 0);
console.log(minElement); // -30