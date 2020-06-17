let add = {
    num: 0,
    calc: function () {
        thisreference = this;
        function innerFunc() {
            console.log("thisreference " ,thisreference)
            thisreference.num += 1;
            return thisreference.num;
        }
        return innerFunc()
    }
}
console.log(add.calc());