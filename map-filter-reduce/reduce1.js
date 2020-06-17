// var numbers = [1, 2, 3, 4, 5];
// total = 0;

// numbers.forEach(number => total += number);
// console.log(total)

var numbers = [10, 2, 3, 4, 5];
//*************REDUCE FUNCTION*********
var total = numbers.reduce(function (previous, current) {
    console.log("previous" + previous);
    console.log("current " + current);
    result=previous + current
    console.log(result);
    return result
},0);
console.log(total);

