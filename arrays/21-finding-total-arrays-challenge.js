
const person = [
  {
    name: "John Doe",
    age: 30,
    city: "New York",
  },
  {
    name: "Alice Smith",
    age: 28,
    city: "Los Angeles",
  }
];

const device = [
  {
    product: "Laptop",
    price: 1000,
    brand: "Apple",
  },
  {
    product: "Smartphone",
    price: 500,
    brand: "Samsung",
  }
];

// Merge these arrays given above

const mergedArray = [...person, ...device];

console.log(mergedArray);
