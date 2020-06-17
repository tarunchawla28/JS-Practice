function context() {
    console.log("The context is", this)
}
context(); //Implicit Context

var someObject = { key: 'value' };
context.call(someObject); //Explicit Context


//****First Class Functions vs Higher Order Functions */
function higher(callback) {
    callback();
}
var callback = function () {
    console.log('Hello World');
}
higher(callback);

var obj = {
    name: 'john snow',
    work: function someWork(paramA, paramB) {
        this.name = paramA + " " + paramB
    }
}
obj.work('Tarun', 'Chawla');
console.log(obj)
function fun(paramA, paramB) {

}

