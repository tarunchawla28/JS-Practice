function delay(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, time);
    })
}

delay(2000)
    .then(function () {
        console.log("After 2000ms");
        return delay(3000)
    })
    .then(function () {
        console.log("After 3000ms");
    })
    .then(function () {
        console.log("step 4 (next Job)");
        return delay(5000)
    })