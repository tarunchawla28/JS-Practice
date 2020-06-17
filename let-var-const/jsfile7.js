// function timer() {
//     for (let i = 0; i <= 5; i++) {
//         setTimeout(function clog() {
//             console.log(i);
//         }, i * 1000)
//     }
// }

//  timer()

// function timer() {
//     for (var i = 0; i <= 5; i++) {
//         setTimeout(function clog() {
//             console.log(i);
//         }, i * 1000)
//     }
// }

//  timer()

// (function timer() {
//     for (var j = 0; j <= 5; j++) {
//         (function () {
//             var i = j;
//             setTimeout(function clog() { console.log(i); }, i * 1000);
//         }());
//     }
// })();

//using IIFE to capture the state of the variable

// (function () {
//     for (var i = 0; i <= 5; i++) {
//         (function (i) {
//             setTimeout(function clog() {
//                 console.log(i)
//             }, i * 1000)
//         })(i)
//     }
// })();

(() => {
    for (var i = 0; i <= 5; i++) {
        ((i) => {
            setTimeout(() => {
                return console.log(i);
            }, i * 1000)
        })(i);
    }
})()

// const tarun='hey';
// const var2='hey'
// tarun=var2;
// console.log(tarun)

const five=5;
console.log(five)
five++;
//the reference thing only works for arrays and objects, not primitive values