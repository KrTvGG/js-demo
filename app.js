/*
    Есть выгрузка операций пользователя
    const operations = [1000, -700, 300, -500, 10000];
    а так же начальный баланс в 100$
    Необходимо сделать фунеции расчёта:
    - Итогового баланса
    - Наличия отрицательного баланса (если после очередной операции
        баланс < 0, то выдавать false)
    - Расчёт среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];

let balance = 100;

function haveNegativeBalance() {
    if (balance < 0) return false;

    return true;
}

function calculateBalance() {
    let i = 0;
    do {
        balance = balance + operations[i];
        i++;
    } while (haveNegativeBalance() && i < operations.length);
}

function calculateAVGExpenceAndIncome() {
    let positive = 0;
    let negative = 0;

    for (i of operations) {
        if (i > 0) {
            positive = positive + i;
        } else {
            negative = negative + i;
        }
    }

    return [positive, negative];
}

calculateBalance();

const [positive, negative] = calculateAVGExpenceAndIncome();

console.log(balance);
console.log(positive);
console.log(negative);