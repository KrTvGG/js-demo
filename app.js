const score = [5, 10, 0, 15];

for (const [i, el] of score.entries()) {
    console.log(`Райнд ${i + 1}: ${el}`);
}

console.log('--------');

score.forEach((el, i) => {
    console.log(`Райнд ${i + 1}: ${el}`);
});