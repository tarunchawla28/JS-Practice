function helloWorld() {
    console.log("Hello World");
}

helloWorld();
window.helloWorld()

var object = {
    method: function () {
        console.log("Am I still a method")
    }
}
object.method(); // method call
var func = object.method;
func();// now it is a function invocation


(function () {
    console.log('Hello World');
})();
console.log("hey")