var add = {
    num: 0,
    calc: function () {
        this.num += 1;
        return this.num;
    }
}

console.log(add.calc());
console.log(add.calc());