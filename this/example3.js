var person1 = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName
    }
}

var person2 = {
    firstName: 'Tarun',
    lastName: 'Chawla'
}
console.log(person1.fullName.call(person2));
