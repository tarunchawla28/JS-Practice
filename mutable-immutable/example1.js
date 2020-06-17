let a = {
    foo: 'bar'
}
console.log("a: ", a);
let b = a;
console.log("b: ", b);
a.foo = 'test';
console.log("a: ", a);
console.log("b: ", b);
console.log(a === b);