function abc() {
    a = 10;
    console.log('value of a ', a)
}
abc()
console.log(a)

var myVar = 'my value';
console.log(myVar)
var myVar = 'hey'
console.log(myVar);

(function () {
    console.log(myVar);
    var myVar = 'new hey'
})()

// console.log(x)
// let x;

var greetings = {
    fullname: 'Tarun Chawla',
    greet: function (message) {
        console.log(this)
        console.log(message);
    },
    arrowGreeet: () => {
        console.log(this);
    }
}
greetings.greet('Tarun')
greetings.arrowGreeet()