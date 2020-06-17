const myIterable = {};

myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
}
var it = myIterable[Symbol.iterator]();
console.log(it)
var arr = [1, 2, 3];
var it2 = arr[Symbol.iterator]();
console.log(it2)

// console.log(it.next());
// console.log(it.next());

// console.log([...myIterable])

for (const val of myIterable) {
    console.log(val)
}
for (const val of it) {
    console.log(val)
}

const myIterable2 = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
    }
}
for (let value of myIterable2) {
    console.log(value)
}

console.log([...myIterable2])

function* fibonacci() {
    let fn1 = 0;
    let fn2 = 1;
    while (true) {
        let current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        let reset = yield current;
        if (reset) {
            fn1 = 0;
            fn2 = 1;
        }
    }
}

const sequence = fibonacci();
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next(true))
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());