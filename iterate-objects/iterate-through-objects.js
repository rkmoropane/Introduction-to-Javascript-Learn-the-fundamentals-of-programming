const expenses = {
    rent: 10000,
    food: 2000,
    movies: 1500
}
let total = 0;
for (const key in expenses) {
    // console.log(expenses[key]);
    total += expenses[key];
}

console.log(total);
