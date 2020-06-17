var func1 = () => { foo: 1 };
console.log(func1())

var func2 = () => { foo: function f() { } }
console.log(func2())

var func3 = () => ({ foo: 1 });
console.log(func3())

var func1 = () => { return { foo: 1 } };
console.log(func1())

var func2 = () => {
    return { foo: function f() { } }
}
console.log(func2())


var func = (a, b, c) => 1;
let callback;

callback = callback || function () { }; // ok

// callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => { });

console.log((() => 'foobar')());  // (this is an Immediately Invoked Function Expression)

var simple = a => a > 15 ? 15 : a;


var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);


var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
elementL = elements.map(element => element.length);
console.log(elementL);

elementsF = elements.map(({ length: lengthF }) => {
    return lengthF;
})
console.log(elementsF)

elements1 = elements.map(({ length }) => length)
console.log(elements1)

var result = x => x * x;
console.log(result(2));