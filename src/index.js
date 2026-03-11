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
console.log("HI");

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
const userType = "super-admin";

// Apply switch statement
switch (userType) {
    case "root":
        console.log("ROOT USER LOGGED IN");
        break;
    case "super-admin":
        console.log("SUPERADMIN USER LOGGED IN");
        break;
    case "admin":
        console.log("ADMIN USER LOGGED IN");
        break;
    case "customer":
        console.log("CUSTOMER USER LOGGED IN");
        break;
    case "enterprise":
        console.log("ENTERPRISE USER LOGGED IN");
        break;
    default:
        console.log("NO USER LOGGED IN");
}

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

console.log("DONE!");
