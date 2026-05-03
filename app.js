/*
    Дан сримок задач
    const tasks = ['Задача 1'];
    Сделать функции:
    - Добавление задач в конец
    - Удаление задачи по названию
    - Перенос задачи в начало списка по названию
    Всегда менять исходный массив
*/

let tasks = ['Задача 1'];

tasks = addTask(tasks, 'test');
tasks = addTask(tasks, 'test2');
tasks = addTask(tasks, 'test3');

console.log(tasks);

tasks = removeTaskByName(tasks, 'test3');

console.log(tasks);

tasks = taskPushTop(tasks, 'test2');

console.log(tasks);

function addTask(tasks, newTask) {
    tasks.push(newTask);
    return tasks;
}

function removeTaskByName(tasks, taskName) {
    if (!tasks.includes(taskName)) {
        return tasks;
    }

    const taskIndex = tasks.indexOf(taskName);
    const startTasks = tasks.slice(0, taskIndex);
    const endTasks = tasks.slice(taskIndex + 1);
    const newTasks = startTasks.concat(endTasks);

    return newTasks;
}

function taskPushTop(tasks, taskName) {
    if (!tasks.includes(taskName)) {
        return tasks;
    }

    const taskIndex = tasks.indexOf(taskName);
    const startTasks = tasks.slice(0, taskIndex);
    const endTasks = tasks.slice(taskIndex + 1);
    const newTasks = startTasks.concat(endTasks);
    newTasks.unshift(taskName);

    return newTasks;
}