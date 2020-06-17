function myPromise() {
    return new Promise(function (resolve, reject) {
        // resolve(100);

        // setTimeout(() => {
        //     resolve(100)
        // }, 2000);

        setTimeout(() => resolve(100), 2000)
    })
}

async function myAsyncFunc() {
    try {
        let result = await myPromise();
        console.log("From Async func " + result)
    } catch (err) {
        console.error(err);
    }
}

myAsyncFunc()

myPromise().then((result) => {
    console.log("From then " + result)
})