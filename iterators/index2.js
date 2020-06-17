function* makeRangeIterator(start = 0, end = 100, step = 1) {
    //let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        //  iterationCount++;
        yield i;
    }
    // return iterationCount;
}

const it = makeRangeIterator(1, 10, 2);
console.log(it.next())
console.log(it.next())
const it2 = makeRangeIterator(1, 10, 2);
console.log(it2.next())

console.log('Break')
function* makeIterator() {
    yield 1;
    yield 2;
}

const it3 = makeIterator();
for (const itItem of it3) {
    console.log(itItem)
}

console.log(it3[Symbol.iterator]() === it3)

it3[Symbol.iterator] = function* () {
    yield 2;
    yield 1;
}
for (const itItem of it3) {
    console.log(itItem)
}