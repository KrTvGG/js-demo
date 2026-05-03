const users = ["Аня", "Вика", "Катя"];
console.log(users); // ["Вася","Аня","Вика","Кристина"]
users[2] = 'Кристина';
console.log(users); // ["Вася","Аня","Вика","Кристина"]

const arrLenght = users.push('Никита');
console.log(arrLenght, users); // 4 ["Аня","Вика","Кристина","Никита"]

users.unshift('Вася');
console.log(users);  // ["Вася","Аня","Вика","Кристина","Никита"]

const el = users.pop();
console.log(el, users); // Никита ["Вася","Аня","Вика","Кристина"]

const el2 = users.shift();
console.log(el2, users); // Вася ["Аня","Вика","Кристина"]