/*
    Написать функцию, которпя возвращает true,
    если элемент есть, и false, если нет.
*/

const arr = [2, 4, 4, 10];
const some = (arr, el) => {
    return arr.findIndex(arrEl => arrEl === el) !== -1;
}
console.log(some(arr, 1)); // false
console.log(some(arr, 2)); // true
console.log(arr.some(el => el === 1)); // false
console.log(arr.some(el => el === 2)); // true