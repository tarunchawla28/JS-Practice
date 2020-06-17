// var Frodo = new Hobbit();
// Frodo.height = 100;
// Frodo.height = 300;
// console.log(Frodo)

// class Hobbit {
//     constructor(height, weight) {
//         this.height = height;
//         this.weight = weight
//     }
// }

var Square = new Polygon();
Square.height = 100;
Square.weight = 200;
console.log(Square)
// var Polygon = class Hobbit {
//     constructor(height, weight) {
//         this.height = height;
//         this.weight = weight
//     }
// }
var Polygon = class {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight
    }
}
