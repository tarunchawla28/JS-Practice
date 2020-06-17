// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log("Value of i after loop", i)

// for (var i = 0; i < 10; i++) {
//     console.log("Value of i while loop is running ",i);
//     setTimeout(function(){
//         console.log("The number is "+i);
//     },1000)
// }

for (let i = 0; i < 10; i++) {
    console.log("Value of i while loop is running ",i);
    setTimeout(function(){
        console.log("The number is "+i);
    },1000)
}