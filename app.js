const prices = [[2, 4], [3, 4], [10, [20, 50]]];
const res = prices.flat(2); // Глубина вложенности
console.log(res); // [2, 4, 3, 4, 10, 20, 50]
const res2 = prices.flatMap(el => el.concat([1]));
console.log(res2); // [2, 4, 1, 3, 4, 1, 10, Array(2), 1]