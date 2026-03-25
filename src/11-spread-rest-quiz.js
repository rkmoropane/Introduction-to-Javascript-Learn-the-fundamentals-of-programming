// Modify the code and print the appropriate message based on the test case shown below.

function mergeObjects(...objects) {
  // Your code here
  let newObject = {};

  for (let obj of objects) {
    newObject = { ...newObject, ...obj };
  }
  

  return newObject;
}

// Test case
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const merged = mergeObjects(obj1, obj2, obj3);
console.log(merged); // Expected output: { a: 1, b: 3, c: 4, d: 5 }
