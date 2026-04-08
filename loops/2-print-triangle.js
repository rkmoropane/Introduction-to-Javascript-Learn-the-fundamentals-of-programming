// console.log("*")
// console.log("* *")
// console.log("* * *")
// console.log("* * * *")
// console.log("* * * * *")

// write a for loop: two-dimensional

let output = "";
for (let i=0; i<6 ; i++) {
    // console.log("*");
    for (let j = 0; j < i+1; j++){
        output += "* ";
        console.log(output);
    }
}