
// // Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)

// // Returns a function, that, as long as it continues to be invoked, will not
// // be triggered. The function will be called after it stops being called for
// // N milliseconds. If `immediate` is passed, trigger the function on the
// // leading edge, instead of the trailing.
// function debounce(func, wait, immediate) {
//     var timeout;

//     return function executedFunction() {
//         var context = this;
//         var args = arguments;

//         var later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };

//         var callNow = immediate && !timeout;

//         clearTimeout(timeout);

//         timeout = setTimeout(later, wait);

//         if (callNow) func.apply(context, args);
//     };
// };

// var returnedFunction = debounce(function () {
//     // All the taxing stuff you do
// }, 250);

// window.addEventListener('resize', returnedFunction);


const debounce = (func, delay) => {
    let inDebounce;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
}

const button = document.getElementById("debounce");
button.addEventListener('click', debounce(function () {
    console.log('Hey it is', new Date().toUTCString())
}, 3000))