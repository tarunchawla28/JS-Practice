let add = {
    num: 0,
    calc: function () {
        console.log('First this ', this);
        function innerFunc() {
            console.log('Second this ', this);
        }
        innerFunc();
    }
}
add.calc()