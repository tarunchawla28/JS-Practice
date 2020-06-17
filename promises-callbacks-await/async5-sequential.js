function doJob(x, sec) {
    return new Promise((resolve, reject) => {
        console.log('Start: ' + x);
        setTimeout(() => {
            console.log('End: ' + x);
            resolve(x);
        }, sec * 1000)
    })
}

//Sequential Await

// async function serialFlow() {
//     let result1 = await doJob(2, 2);
//     let result2 = await doJob(3, 3);
//     let result3 = await doJob(4, 4)
//     console.log(result1);
//     console.log(result2);
//     console.log(result3);
// }
// serialFlow()


// async function serialLoopFlow(jobs) {
//     let finalResult = 0;
//     for (const job of jobs) {
//         let result = await doJob(job, job);
//         finalResult += result;
//     }
//     console.log(finalResult)
// }
// serialLoopFlow([2, 3, 4])


async function serialReduceFlow(jobs) {
    let finalResult = await jobs.reduce(async (total, job) => {
        return await total + await doJob(job, job)
    }, 0);
    console.log(finalResult)
}
serialReduceFlow([2, 3, 4])

