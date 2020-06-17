function loadString(string, callback) {
    console.log("String is " + string);
    callback(null, "success");
}

loadString('Tarun', function (error, response) {
    if (error) {
        console.log("Insid error block")
    } else {
        console.log("Response is " + response);
        loadString('Chawla', function (error, response) {
            if (error) {
                console.log("Inside error block")
            } else {
                console.log("Response is " + response);
                loadString('SE', function (error, response) {
                    if (error) {
                        console.log("inside error block")
                    } else {
                        console.log("Response is " + response)
                    }
                })
            }
        })
    }
})