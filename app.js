for (let i = 1; i < 5; i++) {
    console.log(`Вывод - ${i}`);
}

const arr = [1, 4, 8, 7];
let i = 1;
while (i < 5) {
    console.log(`Вывод - ${i}`);
    i++;
}

i = 0;
while (arr[i] <= 5 && i < arr.length) {
    console.log(arr[i]);
    i++;
}

i = 0;
do {
    console.log(arr[i]);
	i++;
} while (i < 0);