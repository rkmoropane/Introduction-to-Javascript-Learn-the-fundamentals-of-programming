
// Instructions:


// 1) Your task is to write a JavaScript function that iterates through a deeply nested object using a for...in loop and returns an array of all the values found within the object. The object can have nested objects and arrays.



// 2) You need to implement the iterateObject(obj) function that takes an object as input and returns an array of all the values found within the object. The order of values in the output array should follow a depth-first traversal.



// 3) You are allowed to use any built-in JavaScript methods or functions to achieve this. You should not use any external libraries or frameworks.



// 4) Print the output according to the test case given below.
function iterateObject(obj) {
  // Your code here
  let result = [];

  for (let key in obj){
    let value = obj[key];

    if (typeof value === "object" && value !== null) {
      result = [...result, ...iterateObject(value)]; 
    } else {
      result.push(value);
    }
  }
  return result;
}



// Test cases
const sampleObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: [4, 5],
    },
  },
};

const result = iterateObject(sampleObject);
console.log(result);
