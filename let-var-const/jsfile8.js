// // //  'use strict'

// // // console.log(hoist);
// // // var hoist="hey"
// // let hoist
// // console.log(hoist); // Output: ReferenceError: hoist is not defined ...
// //  hoist = 'The variable has been hoisted.';

// expression(); // Ouput: TypeError: expression is not a function
// // 
// let expression = function hoisting() {
//   console.log('Will this work?');
// };
let racer1 = function() {
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
  }
  
  let racer2 = function() {
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
  }
  
  let racer3 = function() {
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 0);
  }
  
  racer1()
  racer2()
  racer3()