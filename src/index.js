// console.log("Uber Profile");

// username = "Kholofelo1234Rams";
// const firstName = "Kholofelo";
// var age = 29;
// var isAdult = true;
// var testUndefined = undefined;
// var username;

// typeof username; // check what the variable is a type of
// console.log(username, age, firstName, isAdult, testUndefined);

// let firstname = "Akhil"; // using let keyword - You can reassign the new value to it
// const surname = "Boddu";
// let cost = "Two thousand five hundred";


// console.log(firstName, surname, cost);

// // If statement (condition) lesson in Javascript
// var price = 20;
// const summerDiscount = 5;
// const winderDiscount = 10;

// let summerSale = false; 

// if (summerSale){
//     price = price - summerDiscount;
//     console.log("summerSale", price)
// ;
// }
// else {
//     price = price - winderDiscount;
// }

// console.log("Final Price:", price);

// // Uber commission problem

// const uberRide = 85;

// const driverCommission = (70/100);

// const uberDriverEarning = uberRide * driverCommission;
// const uberEarning = uberRide - uberDriverEarning;

// console.log("Earning", uberEarning, uberDriverEarning);


// Changing my background
// console.log("HI");

// document.body.style.background = "blue";
// darkmode: black
// sunmode: yello
// skymode: blue
// const darkmode = false;
// const skymode = false;
// const sunmode = true;
// let color = "yellow";

// if (darkmode) {
//     color = "black";
//     document.body.style.background = color;
// } else if(skymode) {
//     color = "blue";
//     document.body.style.background = color;
// } else {
//     document.body.style.background = color;
// }

// console.log("Done");


// Use of operators in Javascript

// const age = 23;

// if (age >= 18) {
//     console.log("USER IS AN ADULT")
// } else {
//     console.log("USER IS A MINOR")
// }

// // Double single equals
// // admin, customer, enterprise
// const userType = "admin";

// if (userType == "admin") {
//     console.log("ADMIN USER LOGGED IN");
// } else if (userType == "customer") {
//     console.log("CUSTOMER USER LOGGED IN");
// } else {
//     console.log("ENTERPRISE USER LOGGED IN");
// }

// double vs triple equals
// double equal: unreal equal true that '18' == 18
// double equal: true equal false that '18' === 18
// const age = "18";

// if (age == 18) {
//     console.log("YOU ARE AN ADULT");
// } else {
//     console.log("NOT AN ADULT");
// }

// switch-statement
// root, super-admin, admin, customer, enterprise
// const userType = "super-admin";

// // Apply switch statement
// switch (userType) {
//     case "root":
//         console.log("ROOT USER LOGGED IN");
//         break;
//     case "super-admin":
//         console.log("SUPERADMIN USER LOGGED IN");
//         break;
//     case "admin":
//         console.log("ADMIN USER LOGGED IN");
//         break;
//     case "customer":
//         console.log("CUSTOMER USER LOGGED IN");
//         break;
//     case "enterprise":
//         console.log("ENTERPRISE USER LOGGED IN");
//         break;
//     default:
//         console.log("NO USER LOGGED IN");
// }

// if (userType == "admin") {
//     console.log("ADMIN USER LOGGED IN");
// } else if (userType == "super-admin") {
//     console.log("SUPERADMIN USER LOGGED IN");
// } else if (userType == "root") {
//     console.log("ROOT USER LOGGED IN");
// }else if (userType == "customer") {
//     console.log("CUSTOMER USER LOGGED IN");
// } else {
//     console.log("ENTERPRISE USER LOGGED IN");
// }

// Creating a bot to greet correctly 
// if morning greet Good Morning
// afternoon greet Good Afternoon!
// night greet Good Night


// Write switch statement block here
// const time = "night";
// switch(time) {
//     case "morning":
//         console.log("Good Morning!");
//         break;
//     case "afternoon":
//         console.log("Good Afternoon!");
//         break;
//     case "night":
//         console.log("Good Night!");
//         break;
//     default:
//         console.log("Hi!");

// }

// console.log("DONE!");


// changing types
// coercion (implicit conversion)
// truthy & falsy values

// const age1 = "23";
// const age2 = parseInt(age1); // use the built-in function 'parseInt()' to change the string to Integer

// const age3 = 23;
// const age4 = String(age3); // use the built-in function 'String()' to change number to a String value 
// console.log(typeof(age1), typeof(age2), typeof(age4));

// coercion (Implicit conversion)

// console.log("23" * "3");
// console.log(typeof("23" * "3"));


// console.log("23" + "3");

// Truthy & Falsy values:

// console.log(Boolean(45));
// let num = 45;

// if (num) {
//     console.log("RUN THE PROGRAM");
// } else {
//     console.log("END THE PROGRAM");
// }

// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));


// Create variable fullName, jobTitle, university, age
// inject them into the string
// appear over multiple lines
const fullName = "Kholofelo Moropane";
const jobTitle = "Software engineer at Kaelo";
const university = "University of South Africa";
const age = 29;

const output = `
  My name is ${fullName}
  I am the ${jobTitle}
  I graduated from the ${university}
  My age is ${age} years
`;

console.log(output);