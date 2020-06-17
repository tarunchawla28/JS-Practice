let a = 'test';
let b = a;
console.log("a: " + a);
console.log("b: " + b);
a = a.substring(2);
console.log("a: " + a);
console.log("b: " + b);
console.log(a === b);
console.log("a[1]: "+a[1])
a[1]='A';
a='T'
console.log(a)