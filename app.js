/*
    Вася положил 10 000$ на вклад 7% годовых с
    копитализацией 1 раз в месяц.
    Вывести в консоль, сможет ли он купить дом за 13 500$
    через 2 года после снятия вклада. И остаток после покупки.

    Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяц
*/

const moneyVasia = 12000;
const rateProcentBank = 7;
const costHouse = 13500;

const result = moneyVasia * (1 + ((rateProcentBank / 100) / 12)) ** 24;

if (costHouse <= result) {
    console.log(`Вася сможет купить дом за ${costHouse}$ через 2 года`);
    console.log(`Остаток Васи после покупки ${result - costHouse}$`);
} else {
    console.log(`Вася НЕ сможет купить дом за ${costHouse}$ через 2 года`);
}

console.log(result);