// Modify the code and print the appropriate message based on the test case shown below.

function mergeObjects(object1, object2) {
  // Your code here
  const newObject = Object.assign({}, object1, object2);
  return newObject
}

const object1 = { name: "Alice", age: 30, hobby: "Reading" };
const object2 = { age: 25, location: "New York", hobby: "Gaming" };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
