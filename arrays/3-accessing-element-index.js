// push & pop => end of the list 
const fruits = ["Apple", "Pineapple", "Watermelon", "Pear"]
fruits.push("Orange");
fruits.push("Grapes");
fruits.pop();

// shift unshift => start of the list 
fruits.unshift("Coconut");
fruits.shift();
console.log(fruits);

// Access the index of the Watermelon
const watermelonIndex = fruits.indexOf("Watermelon");

console.log(fruits[watermelonIndex]);

// Accessing the last element
console.log(fruits[fruits.length - 1]);

