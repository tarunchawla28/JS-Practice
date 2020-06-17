function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function () { return this.firstName + " " + this.lastName; };
    this.changeName = function (name) {
        this.lastName = name;
    };
}

var father = new Person("John", "Doe", 50, "blue");
var mother = new Person("Sally","Rally",48,"green");
console.log(father);
father.nationality = "English";
console.log(father);
father.nameFunc = function () {
    return this.firstName + this.secondName
}
console.log(father);
Person.nationality = 'English'
console.log(Person)
console.log(mother);
mother.changeName('Doe');
console.log(mother)