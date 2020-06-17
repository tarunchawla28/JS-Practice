function getNumber1() {
    return Promise.resolve('374');
}

async function getNumber2() {
    return 374;
}

//Both the above functions do the same work.

function f1() {
    return Promise.reject('Some error')
}

async function f2() {
    throw 'some error';
}

async function loadData1() {
    var promise1 = rp('https://api.example.com/endpoint1');
    var promise2 = rp('https://api.example.com/endpoint2');
    // Currently, both requests are fired, concurrently and
    // now we'll have to wait for them to finish
    var response1 = await promise1;
    var response2 = await promise2;
    return response1 + ' ' + response2;
}

loadData1().then(() => console.log('Done'))

//Below is async function expression
var loadData2 = async function () {
    var promise1 = rp('https://api.example.com/endpoint1');
    var promise2 = rp('https://api.example.com/endpoint2');

    var response1 = await promise1;
    var response2 = await promise2;
    return promise1 + ' ' + promise2
}