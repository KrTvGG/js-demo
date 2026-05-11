/* вытащить имя и фамилию в отдельгые переменные */
const userName = 'Вася aka Terminator Perdinator Пупкин';

const firstSpaceIndex = userName.indexOf(' ');
const firstName = userName.slice(0, firstSpaceIndex);
const lastSpaceIndex = userName.lastIndexOf(' ');
const lastName = userName.slice(lastSpaceIndex + 1, userName.length);
console.log(`${firstName} ${lastName}`);