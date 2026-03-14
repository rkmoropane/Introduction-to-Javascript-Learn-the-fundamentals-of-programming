// Take a bill cost and split it amongst the number of people there. 
// inputs, action, output
// inputs: amount, number of people
// action: find the amount each person has to pay
// output: amount each person pays

// write code here 
function splitBill(amount, numOfPeople) {
    const amountToPay = amount/numOfPeople;
    return `Each person has to pay R${Math.ceil(amountToPay)}`;
}

console.log(splitBill(12000, 8));
console.log(splitBill(12800, 9));
