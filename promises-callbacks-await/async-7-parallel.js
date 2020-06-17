function doJob(x, sec) {
    return new Promise((resolve, reject) => {
        console.log('Start ' + x);
        setTimeout(() => {
            console.log('End ' + x);
            resolve(x);
        }, sec * 1000)
    })
}

// async function doParallelFlow(){
//     let result1 = doJob(2, 2);
//     let result2 = doJob(3, 3);
//     let result3 = doJob(4, 4);
//     let promise1 = await result1;
//     let promise2 = await result2;
//     let promise3 = await result3;
//     console.log(promise1);
//     console.log(promise2);
//     console.log(promise3);
// }
// doParallelFlow()

// async function parallelMapFlow(jobs) {
//     let finalResult = 0;
//     let results = jobs.map(job => doJob(job, job));
//     for (const result of results) {
//         finalResult += await result;
//     }
//     console.log(finalResult);
// }
// parallelMapFlow([1, 2, 3]);

async function parallelMapFlow(jobs) {
    let finalResult = 0;
    let promises = jobs.map(job => doJob(job, job));
    let results = await Promise.all(promises)
    for (const result of results) {
        finalResult += await result;
    }
    console.log(finalResult);
}
parallelMapFlow([1, 2, 3]);