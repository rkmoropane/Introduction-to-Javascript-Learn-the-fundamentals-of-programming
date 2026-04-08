// Make a string to uppercase using the .charAt function 

const text = "akhil boddu";
// let finalValue = "";
// for(let i = 0; i < text.length; i++) {
    // finalValue = finalValue + text.charAt(i).toUpperCase()
// }
// console.log(finalValue)
let i = 0;
let finalValue = "";
while (i < text.length) {
    finalValue = finalValue + text.charAt(i).toUpperCase()
    i++;
}
console.log(finalValue);