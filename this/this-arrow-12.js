function defer(f, ms) {
    console.log(arguments)
    return function () {
        console.log(arguments)
        // setTimeout(() => f.apply(this, arguments), ms)
        //    setTimeout(() => f(arguments[0]), ms)
        setTimeout(() => f(arguments), ms)
    }
}
function sayHello(who) {
    console.log('Inside sayHello ', who)
    alert('Hello ' + who)
}

let sayHiDeferred = defer(sayHello, 2000);
sayHiDeferred('John');