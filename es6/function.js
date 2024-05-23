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