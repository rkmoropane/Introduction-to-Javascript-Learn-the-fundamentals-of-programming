# Introduction to JavaScript: Learn the fundamentals of programming

## What I actually learnt:

- Some cool history about JavaScript

- Variables & Some basic important stuff to know in JS

- More details on different Types & dealing with conditionals

- Using Functions

- Using Objects

- Arrays & Sets

- Classes

- The DOM

- Building Google Keep

- Async Javascript

- Github API project

### Summary

- I will knw all the important things in Javascript, not everything, but whatever is needed for me to get started.

- This sets up a good foundation for me to go ahead and learn ReactJS, AngularJS, VueJS etc.

- I will have also built 2 real world apps in this course, and gotten a good amount of practice!

### How to set up our environment?

In the spirit of mimicking real world experience, let’s set up the environment in which we will code! You can use the platform to test your understanding of concepts, but use the real environments to code real projects!

1. Visual studio code

2. Live server extension

3. Google chrome

### Run JavaScript Everywhere

Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

- **Who developed JavaScript and when?**
 > Brendan Eich developed JavaScript in 1995.

- **Who manages the standard of JS now?**
 > ECMA International.

- **Who used to manage the standard of JavaScript?**
 > 

- **Where can we link JavaScript inside HTML?**
 > "Both `<head>` and `<body>` sections"

 - **What is the src attribute in the `<script>` tag?**
 > The src attribute specifies the URL of the JavaScript file that you want to link to.

## Variables
- Are like boxes that hold information.

### Variable Types

Primitive types:

- string

- number

- boolean

- undefined

- null

- Symbol

everything else - Object type - Objects, Arrays, Sets, Also Maps

### Null vs Undefined

- null is an assigned value. It means nothing.

- undefined typically means a variable has been declared but not defined yet.

- Both are falsy values

### Variable rules

camelCasing

Eg. firstName

- Contains letters, numbers, symbol, $ and _

- The first character cannot be a number

- Cant use reserved words to as names for variables


### Variable Types - Let & Const

**Primitive types:**

- string

- number

- boolean

- undefined

- null

- Symbol

### Strict mode
- Strict mode makes it easier t owrite 'secure' Javascript
 > "use strict" > Helps you write in great manner

#### Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top.

- a variable can be declared after it has been used.

- In other words; a variable can be used before it has been declared.
```javascript
var x; // Declare x
x = 5; // Assign 5 to x

x = 5; // Assign 5 to x (Hoisting)
var x; // Declare x
```
#### If statement

Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Problem: if a summer sale exists at H&M, the new price is reduced by R5, if its a winter sale, the price is reduced by R10. The original price of these shorts are R20. Show the true price if the either sale is happening, or not happening.

##### Why use let & const vs var

1. Prevents hoisting

2. let and const are both block-scoped. Which means you can declare them in for loop or if statement, and they will only be valid for that block.This helps with spotting bugs and makes your code more robust.

3. const prevents variable re-assignment.

**Uber commission problem**

The uber app says that an uber ride costs R85

The driver claims that he only gets a 70% commission. How much does he and the uber earn from this?


#### Double-triple equals
- The `==` operator checks for loose equality, meaning it will compare the values for equality without considering their data types.
- The `===` operator checks for strict equality, meaning it compares both the values and data types.

ECMAScript took over managing Javascript - there's E5, E6, etc
**e.g**
```
var username = "Kholo";
```
- **What is a variable in programming?**
 > "A container to store data"

- **What is the purpose of initializing a variable?**
 > To assign it a value before use

- **Which data type should be used to store a person's name?**
 > String 

- **What does the value null represent in JavaScript?**
 > A value that indicates an empty or non-existent object or reference.

- **Which of the following statements about undefined in JavaScript is correct?**
 > It represents a variable that has been declared but has no value assigned

- **What is the output of the following code snippet? let x; console.log(x);**
 > undefined

- **What's the main difference between let and const?**
 > let is for variables that can change, while const is for variables that stay the same.

- **Which one of these can you change after declaring with const?**
 > Nothing, the value stays the same

- **What does the 'use strict'; directive do in JavaScript?**
 > It enables strict mode, catching common coding mistakes and prohibiting certain actions

- **What is hoisting in JavaScript?**
 > Hoisting is the process of moving variables and function declarations to the top of their containing scope during compilation


- **Which of the following is NOT a benefit of using 'use strict'; in JavaScript?**
 > Allowing the use of deprecated features without warnings

- **What is the key difference between let, const, and var when declaring variables in JavaScript?**
 > let is block-scoped, const is function-scoped, and var is globally scoped

- **In JavaScript, what happens when you use the == operator to compare values of different data types?**
 > JavaScript will automatically convert the values to the same data type before comparing

- **What is the purpose of the switch statement in JavaScript?**
 > It is used to execute different blocks of code based on the value of an expression

- **What does the break statement do within a switch statement in JavaScript?**
 > It prevents fall-through behavior and exits the switch block


- **When might you want to use a switch statement instead of multiple if statements?**
 > When you need to execute multiple conditions
- **Which statement prevents the "fall-through" behavior in a switch statement?**
 > `break;`

- **What is the purpose of the default case in a switch statement?**
 > It is executed when none of the other cases match
