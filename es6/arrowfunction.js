// Arrow function: 
  // Không có từ khóa function
  // Không có constructor

//1. Arrow function (rút gọn)
let square = x => x * x;
  
  
// 2. Không có từ khóa this:
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
  
  // 3. Tên field động
  let fieldName = 'name';
  let fieldPrice = 'price';
  
  let course2 = {
    [fieldName]: 'Java',
    [fieldPrice]: 1000,
  };
  
  
  console.log(course2);
  
  