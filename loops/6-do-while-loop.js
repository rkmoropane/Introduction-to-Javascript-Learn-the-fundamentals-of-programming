// Make a string to uppercase using the .charAt function 

const text = "akhil boddu";

let i = 0;
let finalValue = "";
do {
    finalValue = finalValue + text.charAt(i).toUpperCase()
    i++;
}
while (i < text.length); 
console.log(finalValue);