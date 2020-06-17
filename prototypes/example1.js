function Person(first, last, age, eyecolor) {
this.firstName = first;
this.lastName = last;
this.age = age;
this.eyeColor = eyecolor;
}
// Person.nationality = 'English';
console.log(Person);
// Person.prototype.nationality = "English";
// console.log(Person)
// var father = new Person("John", "Doe", 50, "blue");
// console.log(father)
// console.log(father.nationality);
console.log(Person.prototype)
// Person.prototype.calculateAge = function () {
//     console.log('The current age is ' + this.age)
// }
// console.log(Person.prototype)
var father = new Person("John", "Doe", 50, "blue");
console.log(father);
// var mother = new Person("Jenniger", "Doe", 45, "blue");
// console.log(mother);
// father.calculateAge();
// mother.calculateAge();


console.log(Object.prototype);

console.log(Object.prototype == Person.prototype._proto_);
console.log(father._proto_==Person.prototype)
let myString = 'This is my string.';
