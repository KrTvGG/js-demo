/*
    Дан сримок задач
    const tasks = ['Задача 1'];
    Сделать функции:
    - Добавление задач в конец
    - Удаление задачи по названию
    - Перенос задачи в начало списка по названию
    Всегда менять исходный массив
*/

const tasks = ['Задача 1'];

function Add(task) {
    tasks.push(task);
}

function Remove(task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    tasks.splice(index, 1);
}

function Prioritize(task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    const oldTask = tasks[index];
    tasks.splice(index, 1);
    tasks.unshift(oldTask);
}

Add('Задача 2');
Add('Задача 3');
console.log(tasks); // ["Задача 1","Задача 2","Задача 3"]
Remove('Задача 2');
console.log(tasks); // ["Задача 1","Задача 3"]
Prioritize('Задача 3');
console.log(tasks); // ["Задача 3","Задача 1"]