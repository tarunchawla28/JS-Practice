let someString = "hi";
console.log(someString);

console.log(typeof someString[Symbol.iterator]);

let iterator = someString[Symbol.iterator]();
console.log(iterator + ' ');
// let iteratorFunc = iterator(someString);
console.log(iterator.next());
// console.log(iterator().next());
console.log(iterator.next());
console.log(iterator.next());
console.log([...someString])


let someString2 = new String('hi');
someString2[Symbol.iterator] = function () {
    return {
        next: function () {
            return this._first ? {
                value: 'bye',
                done: (this._first = false)
            } : {
                    done: true
                }
        }, _first: true
    }
}

console.log([...someString2])
console.log(someString2)
// console.log(someString2[Symbol.iterator]().next())
console.log(someString2[Symbol.iterator]);
// console.log(someString2[Symbol.iterator]());
let myFunc = someString2[Symbol.iterator];
console.log(myFunc())
console.log(myFunc().next());


let myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3
};
console.log([...myIterable])
console.log('Another break')
console.log(myIterable[Symbol.iterator]().next())


for (let value of ['a', 'b', 'c']) {
    console.log(value)
}

console.log([...'abc'])

// function* gen() {
//     yield* ['a', 'b', 'c'];
// }
// console.log(gen().next())

function* gen() {
    yield* ['a', 'b', 'c']
}
console.log(gen().next())
console.log(gen().next())
console.log(gen().next())


// [a, b, c] = new Set(['a', 'b', 'c'])
// console.log(a);


function makeIterator(array) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ? {
                value: array[nextIndex++],
                done: false
            } : {
                    done: true
                }
        }
    }
}

let it = makeIterator(['yo', 'ya']);
console.log(it.next());
console.log(it.next());
console.log(it.next());

function idMaker() {
    let index = 0;
    return {
        next: function () {
            return {
                value: index++,
                done: false
            }
        }
    }
}
// let it2 = idMaker;
// console.log(it2())
// console.log(it2().next())
// console.log(it2().next())
// console.log(it2().next())
let it2 = idMaker();
console.log(it2);
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

let val = 0;
function demo() {
    console.log(val);
    val++;
}
// let a1 = demo();
// let a2 = demo();
// demo();
// demo();
let a1 = demo;
let a2 = demo;
//  let a2 = a1;
console.log(a1 === a2);
a1();
a2();
// console.log(a1());
// console.log(a2());

let obj1 = {
    value: 1
}
let obj2 = obj1
obj1.value = 2;
console.log(obj1);
console.log(obj2)



// const tarun = {
//     chawla() {
//         console.log('Inside method');
//     }
// }
// const tarun2 = tarun.chawla;
// // console.log(tarun);
// tarun2();
// // console.log(tarun2())


function* makeSimpleGenerator(array) {
    let nextIndex = 0;
    while (nextIndex < array.length) {
        yield array[nextIndex++]
    }
}

let genIterator = makeSimpleGenerator(['yo', 'ya']);
console.log(genIterator.next().value);
console.log(genIterator.next().value);

function* idMaker() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

// let idGen=idMaker;
// console.log(idGen().next().value);
// console.log(idGen().next().value);
// console.log(idGen().next().value);
let idGen = idMaker();
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);

console.log('break');
class SimpleClass {
    constructor(data) {
        this.data = data;
    }
    [Symbol.iterator]() {
        //  console.log(this)
        let index = 0;
        return {
            next: () => {
                console.log(this)
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);
for (const val of simple) {
    console.log(val)
}
var classIterator = simple[Symbol.iterator]();
console.log(classIterator)
console.log(classIterator.next());
console.log(classIterator.next());
console.log(classIterator.next());

var classIterator2 = simple[Symbol.iterator].bind(simple);
console.log(classIterator2)
console.log(classIterator2().next())
// console.log(classIterator2().next());
// console.log(classIterator2().next());
// console.log(classIterator2().next());

let aGeneratorObject = function* () {
    yield 1;
    yield 2;
    yield 3;
}
console.log(aGeneratorObject)
let aGeneratorObject2 = aGeneratorObject()
console.log(typeof aGeneratorObject2.next)

console.log(typeof aGeneratorObject2[Symbol.iterator])

console.log(aGeneratorObject2[Symbol.iterator]());
console.log(aGeneratorObject2)

console.log(aGeneratorObject2 === aGeneratorObject2[Symbol.iterator]())

console.log([...aGeneratorObject2])


function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen();// here g is generator object which is both iterable and iterator
console.log(g.next())
var gg = g[Symbol.iterator]();
console.log(gg)
console.log(gg.next())


function* idMaker() {
    var index = 0;
    while (true)
        yield index++;
}

var genGen = idMaker();
console.log(genGen.next())

function* fibonacci() {
    var a = yield 2;
    yield a * 2;
}
var fib = fibonacci();
console.log(fib);
console.log(fib.next())
// console.log(fib.next())
// 
function* makeIterator() {
    yield 1;
    yield 2;
}

const iter = makeIterator();
console.log(iter);
for (const itItem of iter) {
    console.log('hey')
    console.log(itItem);
}
console.log(iter);
for (const itItem of iter) {
    console.log('hey')
    console.log(itItem);
}