function doJob(x, sec) {
    return new Promise((resolve, reject) => {
        console.log('Start: ' + x);
        setTimeout(() => {
            console.log('End ' + x);
            resolve(x);
        }, sec * 1000)
    })
}

async function seqAndParallelFlow() {
    try {
        let result1 = await doJob(1, 1);
        let result2 = await doJob(2, 1);
        let flow6_7 = async function () {
            let result6 = await doJob(6, 1);
            let result7 = await doJob(7, 1);
            return result6 + result7;
        }
        let promises = [doJob(3, 2), doJob(4, 2), doJob(5, 2), flow6_7()];
        let results = promises.map(async (job) => await job);

        let finalResults = result1 + result2;
        for (const result of results) {
            finalResults += await result;
        }
        console.log(finalResults)
    } catch (err) {
        console.log(err)
    }
}
seqAndParallelFlow()