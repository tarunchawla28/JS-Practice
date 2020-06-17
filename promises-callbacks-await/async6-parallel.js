function doJob(x, sec) {
    return new Promise((resolve, reject) => {
        console.log('Start ' + x)
        setTimeout(() => {
            console.log('End ' + x);
            resolve(x)
        }, sec * 1000)
    })
}


async function parallelMapFlow(jobs) {
    let results = jobs.map(async (job) => await doJob(job, job));
    let finalResult = 0;
    for (const result of results) {
        finalResult += (await result);
    }
    console.log(finalResult);
}

parallelMapFlow([2, 3, 4])

