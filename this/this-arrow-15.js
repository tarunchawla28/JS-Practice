var adder = {
    base: 1,
    add: function (a) {
        var f = v => v + this.base
        return f(a);
    },
    addThruCall: function (a) {
        var f = v => v + this.base;
        var b = {
            base: 2
        };
        return f.call(b, a);
    }
}

console.log(adder.add(1));
console.log(adder.addThruCall(1))

//*************************** */
var arguments = [1, 2, 3];
var arr = () => arguments[0];
console.log(arr());

function foo1(n) {
    console.log(arguments)
    var f = () => arguments[0] + n;
    return f();
}

function foo2(n) {
    console.log('Inside foo2')
    console.log(arguments);
    var f = (a) => {
        console.log(arguments);
        console.log('Value of a', a)
        return arguments[0] + n
    };
    return f(10);
}
console.log(foo2(1));


function foo3(n) {
    console.log('Inside foo3')
    console.log(arguments)
    var f = (...args) => {
        console.log(args)
        // return arguments[0] + n;
        return args[0] + n;
    }
    return f(10);
}

console.log(foo3(3));
