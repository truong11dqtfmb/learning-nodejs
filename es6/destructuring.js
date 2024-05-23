// Destructuring & rest parameters:

// 1. Destructuring Array/Object:
let array = ["a", "b", "c"];

let [a, b, c] = array;
// let [a,,c] = array;
// let [a,...rest] = array;
// console.log(rest);
console.log(a, b, c);

const person = { name: 'John', age: 30, city: 'New York' };
const { name, age, city } = person;
console.log(name); // Output: 'John'
console.log(age); // Output: 30
console.log(city); // Output: 'New York'

// 2. Default value:
const [p = 10, q = 20, r = 30] = [5];
console.log(p, q, r); // Output: 5, 20, 30



// 3.Rename field in object
let employee1 = {
  fullName: "John",
  age: 21,
  image: "picture.png",
  children: {
    name: "Tom",
  },
};
let {
  fullName: parentName,
  children: { name: childrenName },
} = employee1;

console.log(parentName);
console.log(childrenName);

// 4. Destructuring lồng nhau:
const company = {
  nameCompany: 'Acme Corp',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};
const { nameCompany, address: { street, state } } = company;
console.log(nameCompany); // Output: 'Acme Corp'
console.log(street); // Output: '123 Main St'
console.log(state); // Output: 'CA'


// 5.Rest Array/Object:
let employee = {
  fullName: "John",
  age: 21,
  image: "picture.png",
};

let {fullName, ...newEmployee} = employee;
console.log(newEmployee)


function logger(a, b, ...param) {
  console.log(a);
  console.log(b);
  console.log(param);
}

logger(1, 2, 3, 4, 5, 6);
