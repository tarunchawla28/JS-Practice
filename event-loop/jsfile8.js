// setTimeout(() => {
//     console.log('tarun');
//     setTimeout(() => {
//         console.log('chawla')
//     }, 10)
// }, 95)
// setTimeout(() => {
//     console.log('100')
// }, 100)


// const fs = require('fs');

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('/path/to/file', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
// });

// setTimeout(() => {
//     console.log('timeouts')
// }, 100)
// setImmediate(()=>{
//     console.log('immediate')
// })

// function apiCall(arg, callback) {
//     if (typeof arg !== 'string')
//     return process.nextTick(callback, new TypeError('argument should be string'));
//       // return callback(new TypeError('argument should be string'))
// }
// apiCall(1, (err) => {
//     console.log('Error is', err)
// })

// let bar;

// // this has an asynchronous signature, but calls callback synchronously
// function someAsyncApiCall(callback) { callback(); }

// // the callback is called before `someAsyncApiCall` completes.
// someAsyncApiCall(() => {
//   // since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
//   console.log('bar', bar); // undefined
// });

// bar = 1;

let bar;

function someAsyncApiCall(callback) {
    setTimeout(() => {
        console.log('tarun')
    }, 0)
    process.nextTick(callback);
}

someAsyncApiCall(() => {
    console.log('bar', bar); // 1
});

bar = 1;