const str = 'Вася Пупкинa';
console.log(str.includes('а')); // true
console.log(str.startsWith('В')); // true
console.log(str.endsWith('н')); // true
console.log(new String('Вася Пупкин').includes('а')); // true

console.log(str.toLowerCase()); // вася пупкин
console.log(str.toUpperCase()); // ВАСЯ ПУПКИН
console.log(str.replace('В', 'Ф')); // Фася Пупкин
console.log(str.replace('П', 'Д')); // Вася Дупкин
console.log(str.replace(/а/g, 'и')); // Вися Пупкинa

const str2 = ' Вася Пупкинa  \n';
console.log(str2.trim()); // Вася Пупкинa
console.log(str2.trimEnd()); // _Вася Пупкинa
console.log(str2.trimStart()); //  Вася Пупкинa__