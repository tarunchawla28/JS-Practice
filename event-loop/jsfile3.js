function fetchX(callback) {
    console.log("Inside fetchX")
    callback(1);
}

function fetchY(callback) {
    callback(2);
}

function sum(getX, getY, callback) {
    var x = 10, y = 10;
    getX(function (result) {
        console.log("value of x result is " + result)
        x = result;
        if (y != undefined) {
            callback(x + y)
        }
    });
    getY(function (result) {
        console.log("value of y result is " + result);
        y = result;
        if (x != undefined) {
            callback(x + y)
        }
    });
}

sum(fetchX, fetchY, function (result) {
    console.log("Result is " + result);
})
