// write a for loop to write the following number 
// "2220181614121086420"
let evenString = "";
for (let i = 22; i >= 0; i--) {
    if (i % 2 === 0){
        evenString += i;
    }
}
console.log(evenString);

let output = "";
for(let i=22; i>=0; i=i-2) {
    output = output + i
}

console.log(output);