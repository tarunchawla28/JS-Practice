function doJob(x, sec) {
    return new Promise((resolve, reject) => {
        console.log('Start: ' + x);
        setTimeout(() => {
            console.log('End ' + x)
            resolve(x);
        }, sec * 1000)
    })
}

async function parallelFlow() {
    let promise1 = doJob(2, 2);
    let promise2 = doJob(3, 3);
    let promise3 = doJob(4, 4);
    let result1 = await promise1;
    let result2 = await promise2;
    let result3 = await promise3;
    console.log("Inside async func" + result1);
    console.log("Inside async func" + result2);
    console.log("Inside async func" + result3);
    console.log("Inside async func" + promise1);
    console.log("Inside async func" + promise2);
    console.log("Inside async func" + promise3);
}

parallelFlow()