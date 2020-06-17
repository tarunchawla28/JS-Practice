var variable = {
    name: 'Tarun',
    method() {
        console.log("Inside method");
        console.log(this.name);
    },
    func: function () {
        console.log("Inside func");
        console.log(this.name)
        console.log(this)
    }
}
console.log(variable);
function printName() {
    let sirname = 'Chawla'
    console.log("printing this " + this)
    console.log("Inside printName func " + this.sirname);
    console.log("Inside printName func " + sirname);
}
printName()

