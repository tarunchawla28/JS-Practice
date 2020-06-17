function loadString(string, callback) {
    console.log("String is " + string);
    callback(null, "success");
}
function step4(error, response) {
    if (error) {
        console.log("Inside error block")
    } else {
        console.log("Response is " + response)
    }
}
function step3(error, response) {
    if (error) {
        console.log("Inside error")
    } else {
        console.log("Response is " + response)
        loadString('SE', step4)
    }
}
function step2(error, response) {
    if (error) {
        console.log("Inside error")
    } else {
        console.log("Response is " + response)
        loadString('Chawla', step3)
    }
}
function step1(error, response) {
    if (error) {
        console.log("Inside error")
    } else {
        console.log("Response is " + response)
        loadString('Tarun', step2);
    }
}
loadString('Tarun', step1);