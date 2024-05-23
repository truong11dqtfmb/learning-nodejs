// Spread:

// 1. Sao chép mảng/object:

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

const originalObject = { name: 'John', age: 30 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { name: 'John', age: 30 }

// 2. Ghép mảng/object:
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = [...array1, ...array2];
console.log([...array1, ...array2]); // Output: [1, 2, 3, 4]

const person = { name: 'John' };
const address = { city: 'New York' };
const personWithAddress = { ...person, ...address };
console.log(personWithAddress); // Output: { name: 'John', city: 'New York' }


// 3. Truyền phần tử động
function sum(a, b, c) {
    return a + b + c;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers)); // Output: 6



























