'use strict'
var obj = {//Does not create the new scope  
    i: 10,
    b: () => console.log(this.i, this),
    c: function () {
        console.log(this.i, this)
    }

}
obj.b()
obj.c();

var obj2 = {
    a: 10
}
Object.defineProperty(obj2, 'b', {
    get: () => {
        console.log(this.a, typeof this.a, this);
        return this.a + 10;
    }
})

var foo = () => { };
// var foo = new foo()
console.log(foo.prototype)