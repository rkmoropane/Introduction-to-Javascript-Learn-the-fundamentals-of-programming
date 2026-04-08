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

#### tenary operators: 
- only for short statements

## Objects for Key value pairs

- Useful for storing associated data

- Variables are boxes, and objects are file-cabinets

- Object literal syntax

- Keys are the name of the files

- Values are the actual data in the files

- Object (literal) is the file cabinet

- Objects can be nested (multiple lines)

- Can use functions in key-value pairs

## Primitive type vs Object types:
- Primitive types are the ones that we already used quite a lot in the program. e.g:
Undefined, null, boolean, nummber, string, symbol.
- Object type > allows us to manage structures of primitive.

## Question and answers regarding Javascript.
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

- **What is the primary purpose of the parseInt() function in JavaScript?**
 > It converts a string to an integer

- **What does the String() function do in JavaScript**
 > Converts a number to a string

- **What is type coercion in JavaScript?**
 > The automatic conversion of values between different data types

- **What is the primary purpose of the equality (==) operator in JavaScript?**
 > It compares two values for equality and automatically performs type coercion if needed

- **What is the purpose of an object key in JavaScript?**
 > To provide a unique identifier for an object

- **What is object destructuring in JavaScript?**
 > A process of extracting values from an object and assigning them to variables

- **Which symbol is used for object destructuring in JavaScript?**
 > `{...}`

- **Which syntax is used for object destructuring in JavaScript?**
 > `let { key1, key2 } = object;`

- **What is the purpose of the syntax const { val } = obj in JavaScript?**
 > It extracts the property val from the obj and assigns it to a constant variable named val.

- **Which of the following statements correctly demonstrates the concept of object destructuring using the const { val } = obj syntax?**
 > const { name } = person;

- **What is the primary advantage of using object destructuring for variable assignment?**
 > It provides a concise and convenient way to extract and assign object properties to variables

- **What is the purpose of Object.assign() in JavaScript?**
 > To merge two or more objects into a single object

- **What is the syntax of the Object.assign() method for merging objects?**
 > `Object.assign(targetObj, sourceObj)`

- **What happens if two or more objects being merged have properties with the same name?**
 > The properties from later objects overwrite the properties from earlier objects


- **What is the primary purpose of the rest operator (...) in JavaScript?**
 > To gather multiple function arguments into an array
- **How is the spread operator (...) different from the rest operator (...) in JavaScript?**
 > The spread operator spreads elements from an array or object, while the rest operator gathers elements into an array or object

- **Which of the following statements correctly demonstrates the use of the rest operator in function parameter lists?**
 > `function sum(...numbers) {}`

- **What happens when you use the spread operator with an object?**
 > The properties of the object are spread into a new object

- **How does the spread operator affect the target object when merging properties from source objects?**
 > It modifies the target object by adding properties from the source objects

- **How is a function defined inside an object commonly referred to in JavaScript?**
 > object

- **How can you define a function named calculate inside an object named calculator using the object literal syntax?**
 > `calculator.calculate = function() {}`

- **How can you use the spread operator to create a shallow copy of an object named originalObj with an additional property named newProp?**
 > `const newObj = { ...originalObj, newProp: value };`

### arrays:
- **What is an array in programming?**
 > A data structure used to store a collection of elements of the same type

- **What is the purpose of using an array in programming?**
 > To store and manage multiple values of the same type

- **What is the maximum number of values an array can hold?**
 > It depends on the programming language

- **What is the purpose of the pop() function in JavaScript?**
 > It removes the last element from an array and returns it

- **What does the shift() function do in JavaScript?**
 > It removes the first element from an array and returns it.

- **What does the unshift() function do in JavaScript?**
 > It removes the first element from an array and returns it.

- **What does the indexOf() function in JavaScript return if the element is not found in the array?**
 > `-1`

- **What is the return type of the indexOf() function?**
 > Number

#### Map funciton:
- **What does the `map()` function do in JavaScript?**
 > It creates a new array by applying a provided function to each element in the original array

- **Which of the following statements about the `map()` function is true?**
 > The `map()` function returns a new array without modifying the original array

- **Which of the following methods is similar to `map()` but does not create a new array?**
 > `forEach()`

- **What is the purpose of chaining the `map()` operation with `forEach()` in JavaScript?**
 > To apply a transformation using `map()` and perform an action on each element using `forEach()`

- **What is the order of execution when chaining `map()` with `forEach()` in JavaScript?**
 >First, `map()` is executed, followed by `forEach()`

- **What does the `map()` operation return when used in chaining with `forEach()`?**
 > The original array with transformations applied by `map()`.


- **What is the purpose of the `filter()` method in JavaScript?**
 > It filters the elements of an array based on a given condition.

- **Which of the following is true about the callback function passed to the `filter()` method?**
 > It should return a boolean value

- **What is the main difference between the `filter()` method and the `map()` method?**
 > `filter()` creates a new array containing only elements that meet a condition.

 > `map()` creates a new array with the result of applying a function to every element in the original array.

- **What is the purpose of the `find()` function in JavaScript?**
 > It searches for the first element in an array that satisfies a provided condition

- **In which case is the `find()` function particularly useful?**
 >   When you want to find the first occurrence of a specific element in an array

- **What is the purpose of the `reduce()` function in JavaScript?**
 > It combines all elements of an array into a single value using a provided function

- **What does the callback function passed to the `reduce()` function take as arguments?**
 > The current element, its previous result, and the index of the current element

- **What is the main difference between the `reduce()` function and the `forEach()` function?**
 > The `reduce()` function combines elements into a single value, while `forEach()` iterates through elements without modification.

- **Which of the following statements about the `map()` function is true?**
 > The map() function returns a new array without modifying the original array

- **What does the `map()` function return?**
 > An array containing the results of applying the provided function to each element

- **Which of the following best describes the behavior of the map() function?**
 > It creates a new array by transforming each element based on the provided function

- **What is the result of using the `filter()` function on an empty array?**
 > An empty array

- ** Which of the following scenarios is a suitable use case for the `filter()` function?**
 > Transforming strings into numbers in an array

- **Which of the following methods can be used to achieve a similar result as the `filter()` function?**
 > `map()`

- **Which of the following best describes the behavior of the `find()` function?**
 > It creates a new array by including only the elements that satisfy a provided condition

- **Which of the following scenarios is a suitable use case for the find() function?**
 > Filtering an array to include only elements that meet a specific condition

- **How does the find() function handle gaps (empty or undefined slots) in an array?**
 > It skips over gaps and searches only the defined elements

- **What is the result of using the `reduce()` function on an empty array without providing an initial value?**
 > If you call `reduce()` on an empty arraywithout providing an initial value, JavaScript will throw a TypeError.

- **Which of the following best describes the behavior of the reduce() function?**

 > It combines elements of an array into a single value using a provided function

- **What is the second argument to the reduce() function?**
 > A starting value for the accumulator

- **Which of the following statements is true about using a for loop to iterate through objects in JavaScript?**
 > Objects cannot be iterated using a for loop

- **Which type of loop is more appropriate for iterating through the properties of an object in JavaScript?**
 > for...in loop

- **What is the syntax for using the for...in loop to iterate through the properties of an object?**
 > `for (let property in object)`

- **What does the Object.keys() method return when called on an object?**
 > An array of the object's property names

- **What does the Object.values() method return when called on an object?**
 > An array of the object's property values

- **How can you use the Object.keys() and Object.values() methods to convert an object into separate arrays of keys and values?**
 > By calling Object.keys() to get an array of keys and Object.values() to get an array of values

