const Iterable = {
    [Symbol.Iterable]() {
        let step = 0;
        const iterator = {
            next() {
                step++;
                if (step === 1)
                    return { value: 'Example', done: 'false' }
                else if (step === 2)
                    return { value: 'for', done: 'false' }
                else if (step === 3)
                    return { value: 'Iterator', done: 'false' }
                return { value: undefined, done: 'true' }
            }
        }
        return iterator;
    }
}

var iterator = Iterable[Symbol.Iterable]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//********************* */
for (var num of [1, 2, 3]) {
    console.log(num);
}

console.log('break');
var numbers = [1, 2, 3];
console.log(numbers[Symbol.iterator]);

var numbersIterator = numbers[Symbol.iterator]();
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());


function Words(str) {
    this._str = str;
}
Words.prototype[Symbol.iterator] = function () {
    var re = /\S+/g;
    var str = this._str;
    return {
        next: function () {
            var match = re.exec(str);
            if (match) {
                return { value: match[0], done: false }
            }
            return { value: undefined, done: true }
        }
    }
}

var helloWorld = new Words('Hello World');
for (var word of helloWorld) {
    console.log(word)
}
console.log(helloWorld)
//************************ */
// function* increment(i) {
//     yield i + 1;
//     yield i + 2;
// }
// var obj = increment(10);
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());