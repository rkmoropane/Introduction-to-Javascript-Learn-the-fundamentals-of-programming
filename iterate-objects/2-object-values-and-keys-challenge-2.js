
const expenses = {
  rent: 1200,
  electricity: 100,
  water: 50,
  gas: 80,
  internet: 60,
  groceries: 300,
  home: 50,
  health: 150,
  car: 100,
};

// Calculate the total expenses
let values = Object.values(expenses);
let key = Object.values(expenses);


const totalExpenses = values.reduce((acc, expense) => acc += expense, 0);
console.log(totalExpenses);
