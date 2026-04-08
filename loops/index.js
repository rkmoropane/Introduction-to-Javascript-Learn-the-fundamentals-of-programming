// JavaScript Loops 
// Loops are handy, if you want to run the same code over and over again,
// each time with a different value.

// Make a string to uppercase using the .charAt function 

// for, while, do while


const text = "akhil boddu";
// console.log(text.length);
let finalValue = "";
for (let i = 0; i < text.length; i = i + 1) {
    // console.log("i is equal to", i);
    // console.log("           ", text.charAt(i).toUpperCase());
    finalValue += text.charAt(i).toUpperCase();
};

console.log(finalValue);

// console.log(text.charAt(0).toUpperCase());
// console.log(text.charAt(1).toUpperCase());
// console.log(text.charAt(2).toUpperCase());
// console.log(text.charAt(10).toUpperCase());

 