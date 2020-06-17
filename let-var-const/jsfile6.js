// for (var i = 1; i <= 5; i++) {

//     (function (i) {
//         setTimeout(function () {
//             console.log('Value of i : ' + i);
//         }, 100);
//     })(i);
// }


//Immediately Invoked Function Expression (IIFE) in ES5
for (var i = 1; i <= 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log("value of i ", i)
        },100)
    })(i)
}