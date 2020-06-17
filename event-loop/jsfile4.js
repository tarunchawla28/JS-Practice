function fetchX() {
    return new Promise(function (resolve, reject) {
        resolve(4);
    })
}

function fetchY() {
    return new Promise(function (resolve, reject) {
        resolve(5);
    })
}

function sum(xPromise, yPromise) {
    return Promise.all([xPromise, yPromise])
        .then(function (values) {
            console.log("values: ", values)
           // throw "err";
            return values[0] + values[1];
        })
}

sum(fetchX(), fetchY())
    .then(function (result) {
        console.log("Result is ", result)
    }, function (err) {
        console.log("Error is", err);
    })