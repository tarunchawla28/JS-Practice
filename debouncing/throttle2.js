const throttle = (func, limit) => {
    let lastRun;
    let lastFunc;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRun) {
            func.apply(context, args)
            lastRun = Date.now();
        } else {
            clearTimeout(lastFunc)
            lastFunc = setTimeout(function () {
                if (Date.now() - lastRun >= limit) {
                    func.apply(context, args);
                    lastRun = Date.now();
                }
            }, limit - (Date.now() - lastRun))
        }
    }
}


setTimeout(() => {
    console.log('Hi')
}, 3000)