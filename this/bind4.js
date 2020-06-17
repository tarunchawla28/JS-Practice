var dog = {
    noise: 'arf',
    speak: function () {
        console.log("Inside speak of dog", this)
        console.log(this.noise)
    }
};

var cat = {
    noise: 'meow',
    speak: function () {
        console.log("Inside speak of cat", this)
        console.log(this.noise)
    }
}
setTimeout(cat.speak, 1000)
//  setTimeout(cat.speak(), 1000)
setTimeout(cat.speak.bind(cat), 2000)
setTimeout(function () {
    console.log('Inside setTimeout');
    console.log(this)
    this.cat.speak();
}, 4000)
// setTimeout(() => {
//     console.log('hey')
// }, 1000);

