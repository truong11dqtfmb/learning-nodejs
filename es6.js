const xinSdt = () => {
    let sdt;
    console.log('1 - Gọi điện cho thằnng bạn XYZ, cho tao xin số của thằng ABC');

    console.log('2 - XYZ đang tìm số của ABC cho bạn');
    
    // Giả sử thời gian tìm số  điện thoại của ABC mất khoảng 1s
    setTimeout(() => {
        sdt = 123456789;
        console.log('3 - XYZ đã tìm thấy số của ABC');
    }, 1000);

    console.log(`4 - Số điện thoại của ABC là ${sdt}`);
};

// Gọi hàm để xem kết quả
xinSdt();






// Execute the function "doThis" with another function as parameter, in this case "andThenThis". doThis will execute whatever code it has and when it finishes it should have "andThenThis" being executed.
doThis(andThenThis)
// Inside of "doThis" it's referenced as "callback" which is just a variable that is holding the reference to this function
function andThenThis() {
  console.log('and then this')
}
// You can name it whatever you want, "callback" is common approach
function doThis(callback) {
  console.log('this first')
  callback()
  
  // the '()' is when you are telling your code to execute the function reference else it will just log the reference callback()
}




// Arrow function
const gfg = () => {
  console.log("Hi from GeekforGeeks!");
};

gfg();


// keyword
function greet() {
  console.log("Hello, my name is " + this.name);
}

const person = {
  name: "John",
  sayHello: greet,
};

const anotherPerson = {
  name: "Alice",
};

greet(); // Output: Hello, my name is undefined
person.sayHello(); // Output: Hello, my name is John
greet.call(anotherPerson); // Output: Hello, my name is Alice

// // Const 
// const name = 'Mukul';
// console.log(name); 
// // Will print 'Mukul' to the console.
 
// // Trying to reassign a const variable
// // name = 'Rahul';
// // console.log(name);



// Object Destructuring
const college = {
    name : 'DTU',
    est : '1941',
    isPvt : false
};
let {name, est, isPvt} = college;
console.log(name, est, isPvt);
 
// Array Destructuring
const arr = ['lionel', 'messi', 'barcelona'];
let[value1,value2,value3] = arr;
console.log(value1, value2, value3);



// classes in ES6
class Vehicle{
    constructor(name,engine){
        this.name = name;
        this.engine = engine;
    }
}
 
const bike1 = new Vehicle('Ninja ZX-10R','998cc');
const bike2 = new Vehicle('Duke','390cc');
 
console.log(bike1.name); // Ninja ZX-10R
console.log(bike2.name); // Duke



// Rest parameter and spread operator in ES6
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum += i;
    }
    return sum;
}
console.log(fun(1,2)); // 3
console.log(fun(1,2,3)); // 6 
console.log(fun(1,2,3,4,5)); // 15  





// Hoisting
// function codeHoist() {
//     a = 10;
//     let b = 50;
// }
// codeHoist();

// console.log(a); // 10
// console.log(b); 



const getData = async () => {
    let data = "Hello World";
    return data + ' dqt';
}
 
getData().then(data => console.log(data));



