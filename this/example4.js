// 'use strict'
function doSomething() {
    console.log(this)
    this.propone = 'Test value1';
    // postpone ;
}
doSomething();
console.log('hello')
console.log(window.propone);
console.log(this)

// let postpone;   
// console.log(typeof postpone); 

// let hey = {
//     name:'tarun',
//     method() {
//         // console.log(this)
//         return this;
//     }
// }
// console.log(hey.method());

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
        return this;
    }
};
console.log(person.myFunction());
console.group(this);


