
// Your code here
function calculate(operation, ...args) {
    if (args.length === 0) {
        return 0;
    }

    switch(operation) {
        case "add":
            return args.reduce((sum, num) => sum + num,0);
        case "subtract":
            return args.reduce((result, num) => result - num);
        case "multiply":
            return args.reduce((result, num) => result * num);
        case "divide":
            if (args.slice(1).includes(0)){
                return "Cannot divide by zero"
            }
            return args.reduce((result, num) => result / num);
        default:
            return "Invalid operation"
    }

}



// Output
console.log(calculate("add", 1, 2, 3, 4)); // Output: 10
console.log(calculate("subtract", 10, 3, 2, 1)); // Output: 4
console.log(calculate("multiply", 2, 3, 4, 5)); // Output: 120
console.log(calculate("divide", 20, 5, 2, 1)); // Output: 2