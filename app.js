/*
    Пользователь:
    - Возраст
    - Налисие работы
    - Деньги
    Нужно проверить может ли он купить новый MacBook за 2000$?
    Он может брать не только свои дениги, но и взять кредит
    Ему дадут 500$, только если ему больше 24-х лет и он
    имеет работу, 100$ если ему просто больше 24-х лет и 0 в
    ином случае.
    Напишите функцию, которая принимает данные пользователя
    и товара и возвращает true или false;
*/

const mackbookCostUSD = 2000;

function credit(age, hasWork = false) {
    switch (true) {
	case age >= 24 && hasWork:
		return 500;
	case age >= 24:
	    return 100;
	default:
	    return 0;
    }
}

function canBuy(age, hasWork, money) {
    if (money < mackbookCostUSD) {
        const creditValue = credit(age, hasWork);
        money += creditValue;
    }

    return money < mackbookCostUSD ? 'Не хватает денег на покупку!' : 'Хватет денег на покупку!';
}

const result = canBuy(24, true, 1500);

console.log(result);