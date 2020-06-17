let add = {
    num: 0,
    calc: function () {
        console.log("this inside calc " + this)
        function innerFunc() {
            console.log("this inside innerFunc " + this)
            this.num += 1;
            return this.num;
        }
        return innerFunc()
    }
}

console.log(add.calc());

