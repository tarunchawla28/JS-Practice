var printTwo = function () {
    console.log(2);
}

printTwo()
printTwo.call();
printTwo.apply()
const objAddr = {
    address: 'Bangalore'
}
var someFunc = function (firstName, lastName) {
    //console.log(this.address + ' ' + this.length);
    console.log(firstName + ' ' + lastName)
}

someFunc.apply([1, 2, 3], ['tarun', 'chawla']);
someFunc.apply(objAddr, ['tarun', 'chawla'])
someFunc.apply(objAddr, ['tarun', 'chawla'])
someFunc.call(objAddr, 'tarun', 'chawla')
someFunc.call(objAddr, ['tarun', 'chawla'])

var dog = {
    noise: 'arf',
    speak: function () {
        console.log(this.noise)
    }
};

var cat = {
    noise: 'meow',
    speak: function () {
        console.log("Inside speak of cart", this)
        console.log(this.noise)
    }
}
console.log('break')
dog.speak.call(cat);
dog.speak.apply(cat);
cat.speak = dog.speak;
cat.speak();


//noise='NOISE'

setTimeout(cat.speak, 1000)
setTimeout(cat.speak.bind(cat), 1000)
// setTimeout(function () {
//     console.log('Inside setTimeout');
//     console.log(this)
//     this.cat.speak()
// }, 1000)
setTimeout(() => {
    console.log('hey')
}, 1000);