const throttle = (func, limit) => {
    let inThrottle
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args)
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

const button = document.getElementById("throttle");
button.addEventListener('click', throttle(function () {
    console.log('Hey this is ', new Date().toUTCString())
}, 3000))