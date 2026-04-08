function customFilter(array, filterFunction) {
    // Your code here
    const newArray = array.filter((item, index) => filterFunction(item));
    return newArray;
}



// Test Case
const words = ["apple", "banana", "grape", "kiwi", "pear"];
function isLongWord(word) {
    return word.length > 4;
}
const result = customFilter(words, isLongWord);
console.log(result);


const person = [
  {
    name: "John Doe",
    age: 30,
    address: "123 Main St, City",
    email: "john@example.com"
  },
  {
    name: "Alice Smith",
    age: 16,
    address: "456 Elm St, Town",
    email: "alice@example.com"
  },
  {
    name: "Bob Johnson",
    age: 35,
    address: "789 Oak St, Village",
    email: "bob@example.com"
  },
  {
    name: "Robert",
    age: 17,
    address: "789 Oak St, Village",
    email: "robert@example.com"
  }
];


// Your code here

console.log(person.filter((item, index) => (item.age > 18)));