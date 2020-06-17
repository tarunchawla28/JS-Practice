// var obj = {
//     method() {
//         console.log("method")
//     },
//     func: function f() {
//         console.log("f");
//     }
// }
// obj.func()
// obj.method();

const obj = {
    method() {
        // console.log( method );
    },
    ordinaryFunction: function ordinaryFunction() {
        console.log( ordinaryFunction );
    }
};

obj.ordinaryFunction()  // All good!
obj.method();