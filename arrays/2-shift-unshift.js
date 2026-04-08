// push & pop => end of the list
const fruits = ["Apple", "Pineapple", "Watermelon", "Pear"]
fruits.push("Orange");
fruits.push("Grapes");
fruits.pop()

// shift unshift => start of the list
fruits.unshift("Coconut");
console.log(fruits);
fruits.shift();
console.log(fruits);