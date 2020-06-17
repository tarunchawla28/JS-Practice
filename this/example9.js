// function bike() {
//     console.log(this.name);
// }

// var name = 'Tarun';
// var obj1 = {
//     name: 'Nishtha',
//     bike: bike
//     // bike: function () {
//     //     console.log('Inside obj1 func ' + this.name)
//     // }
// }
// var obj2 = {
//     name: 'Chawla',
//     bike: bike
// }

// bike();
// obj1.bike()

//**************?*******/

// var obj1 = {
//     name: 'pulsar',
//     bike: function () {
//         console.log(this.name);
//     }
// }
// var obj2 = {
//     name: 'Gixxer',
//     bike: obj1.bike
// }
// var name = 'Ninja'
// var bike = obj1.bike;
// bike();  //DEFAULT BINDING
// obj1.bike(); //IMPLICIT BINDING
// obj2.bike()


//***********Explicit Binding************/
// function bike() {
//     console.log(this.name);
// }

// var name = 'Ninja';
// var obj = {
//     name: 'Pulsar'
// }

// bike();
// bike.call(obj)


//************HARD or FIXED BINDGING**/
// var bike = function () {
//     console.log(this.name)
// }
// // var originalBileFunc = function () {
// //     console.log(this.name)
// // }
// var name = 'Ninja';
// var obj1 = { name: 'Pulsar' };
// var obj2 = { name: 'Gixxer' };
// var originalBikeFunc = bike;
// bike = function () {
//     originalBikeFunc.call(obj1)
// }
// bike();
// bike.call(obj2);


///*************NEW**********/
function bike() {
    var name = 'Ninja';
    this.maker = 'Kawasaki';
    console.log(this.name + ' ' + this.maker + ' ' + maker)
}

var name = 'Pulsar';
var maker = 'Bajaj';

obj = new bike();
console.log(obj.maker)
