let a = {
    foo: 'bar'
}
let b = Object.assign({}, a);
console.log("a: ", a);
console.log("b: ", b);
console.log(a === b)
b.foo = "bar2";
console.log("a: ", a);
console.log("b: ", b);
console.log(a === b)