// Tenary operators
//  && || ()
const isPremium = false;
// let color = "grey"; //  white
const color = isPremium ? "grey" : "yellow"

// if (isPremium) {
//     color = "white";
// } else {
//     color = "grey";
// }
document.body.style.background = color
  
// age example
// < 8 => "hi, kiddo",
// >= 8 => "hey there"

let age = 9;
// if (age < 8 ) {
//     console.log("HI KIDDO");
// } else {
//     console.log("HEY THERE!");
// }

const message = age < 8 ? "HI KIDDO!" : "HEY THERE!";
console.log(message);

let temperature = 20;
let weather;

// Fix the bug in the next line
weather = temperature < 0 ? "Freezing" : temperature <= 15 ? "Cold" : temperature <= 25 ? "Mild" : "Hot";

// The above line should be a single line using the ternary operator.

console.log(weather); // Should print the correct weather condition as shown.



// only good for short statements
age = 22;
const userType = "enterprise";
// const greeting = userType === "admin" ? (age < 18 ? "YOU ARE NOT ALLOWED" : "WELCOME ADMIN USER") : "ENTERPRISE USER LOGGED IN";

// if(userType == "admin") {
//     if(age < 18) {
//         console.log("YOU ARE NOT ALLOWED HERE");

//     } else {
//         console.log("WELCOME ADMIN USER");
//     }
// } else {
//     console.log("ENTERPRISE USER LOGGED IN");
// }

// only good for short statements
// better do not use tenary operators

let greeting;
if (userType == "admin") {
    if(age < 18) {
        greeting = "YOU ARE NOT ALLOWED HERE";
    } else {
        greeting = "WELCOME ADMIN USER";
    }
}
else {
    greeting = "ENTERPRISE USER LOGGED IN";
}
console.log("GREETINGS:", greeting);
