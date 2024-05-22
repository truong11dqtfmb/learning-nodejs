// 1. new Promise
// 2. Executor

// các trạng thái của Promise:
// 1. Pedding
// 2. Fulfilled
// 3. Reject

// kết quả trả về của function trước là tham số đầu vào của function sau trong Promise

let promise = new Promise(
  // Executor
  function (resolve, reject) {
    // Logic
    // Thành công: resolve()
    // Thất bại: reject()

    // call api
    resolve();

    // reject();
  }
);

// promise
//   .then(function () {
//     console.log("Success: ");
//   })
//   .catch(function () {
//     console.log("Failed: ");
//   })
//   .finally(function () {
//     console.log("Done");
//   });

// promise
//   .then(function () {
//     return 1;
//   })
//   .then(function (data) {
//     console.log(data);
//     return 2;
//   })
//   .then(function (data) {
//     console.log(data);
//     return 3;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function () {
//     console.log("Failed: ");
//   })
//   .finally(function () {
//     console.log("Done");
//   });


// promise
//   .then(function () {
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve([1,2,3]);
//         },3000);
//     });
//     // return 1;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function () {
//     console.log("Failed: ");
//   })
//   .finally(function () {
//     console.log("Done");
//   });

//   1. Promise.resolve
//   2. Promise.reject
//   3. Promise.all: thực hiện nhiều promise cùng 1 lúc

// Khi promise có reject thì tất cả các promise đằng sau sẽ không thực hiện và cacth ngay lập tức


// var promiseRes = Promise.resolve('Success');
// var promiseReJ = Promise.reject('Fail');

var promise1 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1]);
        },2000);
    }
)

var promise2 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3]);
        },3000);
    }
)

Promise.all([promise1, promise2])
    .then(function([result1, result2]){
        console.log(result1.concat(result2));
    })
    .catch(function(err){
        console.log(err);
    });


