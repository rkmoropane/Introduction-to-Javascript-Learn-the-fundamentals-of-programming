// #1: Avoid direct comparisons where possible
// #2: Use === (strict equals operators)
// #3: Convert to real Bool values where needed

// const user = "user-data";

// if (user) {
//     console.log("ALLOWED INTO THE PLATFORM");
// } else {
//     console.log("NOT ALLOWED INTO THE PLATFORM");
// }

// ----------------------------------------------------------

// Use === (strict equals operators)
// console.log("23" === 23) // use strict equals operators all the time, to avoid errors

// // Convert to real Bopol values where needed
// console.log(Boolean(NaN) == Boolean(NaN))