const userName = 'Вася Пупкин';
console.log(userName[0]); // В
console.log(userName[1]); // а
console.log(userName.charAt(2)); // с

console.log(userName.length); // 11
console.log(userName.indexOf('П')); // 5
console.log(userName.lastIndexOf('н')); // 10
console.log(userName.includes('Пуп')); // true

console.log(userName.slice(5)); // Пупкин
console.log(userName.slice(5, 8)); // Пуп