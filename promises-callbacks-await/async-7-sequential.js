function doJob(x, sec) {
    return new Promise((resolve, reject) => {
        console.log('Start ' + x);
        setTimeout(() => {
            console.log('End ' + x)
            resolve(x);
        }, sec * 1000)
    })
}

// async function serialFlow() {
//     let result1 = await doJob(2, 2);
//     let result2 = await doJob(3, 3);
//     let result3 = await doJob(4, 4)
//     const finalResult = result1 + result2 + result3;
//     console.log(finalResult)
// }
// serialFlow();

// async function serialLoopFlow(jobs) {
//     let finalResult;
//     for (let job of jobs) {
//         let result = await doJob(job, job);
//         finalResult += result;
//     }
//     console.log(finalResult)
// }
// serialLoopFlow([2, 3, 4])

async function serialLoopReduce(jobs) {
    let finalResult = await jobs.reduce(async (previous, current) => {
        return await previous + await doJob(current, current);
    }, 0)
}
serialLoopReduce([2, 3, 4])


