var width
var length;
function returnWidth() {
    var width = 100;
    length = 200;
    console.log("Width inside the function", width);
    console.log("Length inside the function", length);
}

returnWidth();
console.log("Width outside the function", width)
console.log("Length outside the function", length)

// var age = 100;
// if (age > 12) {
//     var dogYears = age * 7;
//     console.log(`You are ${dogYears} years old`)
// }

// console.log("Dog years outside if block", dogYears)

var age = 100;
if (age > 12) {
    let dogYears = age * 7;
    console.log(`You are ${dogYears} years old`);
}

console.log("Dogyears outside if block", dogYears)