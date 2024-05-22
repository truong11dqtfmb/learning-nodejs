// 1. Let,const
// 2. Template literals
// 3. Multi-line String
// 4. Arrow function(không có context)
// 5. Classes
// 6. Default parameter values
// 7. Destructuring
// 8. Rest parameters
// 9. Spread
// 10. Enhanced object literals
// 11. Tagger template literals
// 12. Modules

// Babel

//   1. Let,const
/*
 * 1. var / let, const: Scope, Hosting
 * 2. const / var,let: assignment
 * 
 */

// To object:
const sum = (a,b) => ({a: a, b:b});

console.log(sum(1,4));


// One parameter:
const logger = log => console.log(log);
logger('Message...')


// Các loại function trong JS:
// 1. Declaration Function:
function sayHello() {
  const num = 11;
  console.log(`Hello 0 ${num}`);
}

// 2. Expression Function:
const sayHello1 = function() {
  console.log('Hello 1 !');
};

// 3. Arrow Function:
const sayHello2 = () => {
  console.log('Hello 2 !');
};

// 4. Immediately Invoked :function được gọi ngay sau khi được định nghĩa.
(function() {
  console.log('Hello 3 !');
})();




let name = 'Javascript';
let price = 1100;

let course0 = {
  name: name,
  price: price,
  getName: function() {
    return name;
  }
};
console.log(course0);

let course1 = {
  name,
  price,
  getName() {
    return name;
  }
};
console.log(course1);

let fieldName = 'name';
let fieldPrice = 'price';

let course2 = {
  [fieldName]: 'Java',
  [fieldPrice]: 1000,
};


console.log(course2);



// Default value:
function loggerDefaultValue(log){
  if(typeof log === 'undefined'){
    log = 'Gia tri mac dinh';
  }
  console.log(log);
}

function loggerDefaultValueES6(log = 'Gia tri mac dinh'){
  console.log(log);
}
loggerDefaultValueES6(undefined);
loggerDefaultValueES6();
loggerDefaultValueES6('Message');

function loggerDefaultOption(log, type = 'log'){
  console[type](log);
}
loggerDefaultOption('Message', 'error');



// destructuring & rest parameters:

// Array:
let array = ['a', 'b','c'];

let [a,b,c] = array;
// let [a,,c] = array;
// let [a,...rest] = array;
// console.log(rest);
console.log(a,b,c);

// Object: 
let employee = {
  fullName: 'John',
  age: 21,
  image: 'picture.png'
} 

// let {fullName, age, image} = employee;
// console.log(fullName, age, image);

let {fullName, ...newEmployee} = employee;
console.log(newEmployee)







