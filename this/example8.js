let people = function (name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo = function () {
        console.log(this.name + " is " + this.age + " years old ");
    }
}

let person1 = new people('Tarun', 24);
person1.displayInfo()
