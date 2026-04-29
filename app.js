const role = "manager";

switch (role) {
    case "manager":
        console.log("Менеджер");
        break;
    case "admin":
        console.log("Admin");
        break;
    case "ceo":
        console.log("ceo");
        break;
    default:
        console.log("Мы тебя не знаем");
        break;
}

switch (role) {
    case "manager":
    case "admin":
        console.log("Не руководитель");
        break;
    case "ceo":
        console.log("Руководитель");
        break;
    default:
        console.log("Мы тебя не знаем");
        break;
}

const num = 1;

switch (true) {
    case num > 0: // true === num > 0
        console.log("Положительный");
        break;
    case num < 0:
        console.log("Отрицатлельный");
    default:
        console.log("Ноль!");
}
