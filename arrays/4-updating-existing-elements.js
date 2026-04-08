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

// updating/edit the watermelon element to Green Watermelon
fruits[watermelonIndex] = "Green Watermelon";

console.log(fruits);

