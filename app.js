const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users); // ['Вася', 'Маша', 'Катя', 'Аня']
users.sort();
console.log(users); // ['Аня', 'Вася', 'Катя', 'Маша']

const operations = [100, -300, -100, 50, 480];
console.log(operations); // [100, -300, -100, 50, 480]
operations.sort();
console.log(operations); // [-100, -300, 100, 480, 50]

// < 0 - el1, el2 - сохраняем порядок
// > 0 - el2, el1 - меняем порядок
// По возрастанию
operations.sort((el1, el2) => {
    if (el1 > el2) {
        return 1;
    }
    if (el1 < el2) {
        return -1;
    }
});
console.log(operations); // [-300, -100, 50, 100, 480]

// По убыванию
operations.sort((el1, el2) => {
    if (el1 < el2) {
        return 1;
    }
    if (el1 > el2) {
        return -1;
    }
});
console.log(operations); // [480, 100, 50, -100, -300]

// По возрастанию (сокращенный вариант)
operations.sort((el1, el2) => el1 - el2);
console.log(operations); // [-300, -100, 50, 100, 480]