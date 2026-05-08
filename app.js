const score = [5, 10, 0, 15];

score.forEach((scoreEl, i, arr) => {
    console.log(`Райнд ${i + 1}: ${scoreEl}`);
});

const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = [];
for (const transaction of transactionInUSD) {
    transactionInRUB.push(transaction * 60);
}

console.log(transactionInUSD);
console.log(transactionInRUB);

const transactionInRUB2 = transactionInUSD
    .map((transaction, i, arr) => {
        return transaction * 60;
    });

console.log(transactionInRUB2);