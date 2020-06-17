// 'use strict';
// console.log(typeof variable);
// console.log(variable);
// var b;
//b;
function hoist() {
    a = 20;
    // console.log(a);
    var b = 20;
}
hoist();
console.log(a);
// console.log(b);

let x;
console.log(x);
// let x;
// console.log(y);
// const y='Tarun';

// function getCircumference(radius) {
//    // let circumference;
//     console.log(circumference)
//     circumference = PI*radius*2;
//     const PI = 22/7;
//   }

//   getCircumference(2);
