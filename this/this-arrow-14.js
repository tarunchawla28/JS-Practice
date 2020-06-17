'use strict';
function Person() {
    this.age = 0;
    // setInterval(() => {
    //     this.age++;
    //     console.log(this)
    // }, 1000)
    // setInterval(function intervel() {
    //     this.age++;
    //     console.log(this)
    // }, 1000)
}
var p = new Person();
var f = () => { 'use strict'; return this };
console.log(f())
var f = function fun() { 'use strict'; return this };
console.log(f())

function fun(){
    console.log(this);
    console.log(this.age)
}
var age;
fun()