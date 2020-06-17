let add = {
    num: 0,
    calc: function () {
        this.num += 1
        return this.num;
    },
    arrowCalc: () => {
        console.log(this);
    },
    arrowProp: setTimeout(() => {
        console.log('inside arrowProp ', this);
    }, 10),
    normalProp: setTimeout(function () {
        console.log('inside normal prop ', this)
    })
}

console.log(add.calc());
console.log(add.calc());
add.arrowCalc();
add.arrowProp();
add.normalProp();
