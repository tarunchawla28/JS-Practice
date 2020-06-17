var reduce = function (array, callback, initial) {
    var accumulator = initial || 0;
    array.forEach(element => {
        accumulator = callback(accumulator, element)
    });
    return accumulator
};

var result = reduce([1, 2, 3, 4, 5], function (previous, current) {
    return previous + current;
})
console.log(result);