function LateBloomer(name) {
    // this.name = name;
    // console.log(this);
    // this.methods= function() {
    //     console.log(this)
    // }
    this.petalCount = Math.floor(Math.random() * 12) + 1;
}

LateBloomer.prototype.bloom = function () {
    console.log(this);
    thisref = this;
    setTimeout(function () {
        console.log("Inside setTimeout", this);
        // thisref.declare()
        this.flower.declare()
    }, 1000);
    // window.setTimeout(this.declare.bind(this), 1000)
}

LateBloomer.prototype.declare = function () {
    console.log(this);
    console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
}

var flower = new LateBloomer('sunflower')
flower.bloom();
var obj = 'tarun';
const objcons = 'chawla'
let objlet = 'hey'
// var obj = {
//     name:'tarun',   
//     methods() {
//         console.log(this)
//     }
// }
// obj.methods()