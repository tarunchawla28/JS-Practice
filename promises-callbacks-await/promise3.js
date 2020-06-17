// Promise.resolve().then(()=>console.log(1))
// console.log(2);
//output 2 1

// const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

// wait().then(() => console.log(1));
// Promise.resolve().then(() => console.log(3)).then(() => console.log(4));
// console.log(2);


// wait().then(() => console.log(1));
// Promise.resolve().then(() => {
//     console.log(3)
//     return new Promise((resolve, reject) => setTimeout(resolve, 2000));
// }
// ).then(() => console.log(4)).then(()=>console.log(5));
// console.log(2);


// wait().then(() => {
//     console.log(1);
//     wait().then(() => {
//         console.log(2)
//         throw new Error('Error inside');
//     }).then(()=>console.log(4)).catch(err=>console.log(err))
// }).then(() => console.log(3)).catch((err)=>console.log(err))


// wait()
//     .then(() => {
//         console.log(1);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(3);
//                 resolve();
//             }, 1000)
//         })
//     })
//     .then(() => {
//         console.log(2);
//     })


// wait()
//     .then(() => {
//         console.log(1);
//     })
//     .then(() => {
//         setTimeout(() => {
//             console.log(2);
//         })
//         console.log(3);
//     })
//     .then(() => {
//         console.log(4);
//     })

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success")
    }, 2000)
})

promise1.then((result) => {
    console.log(result)
   // return result;
}).then(result => {
    console.log(result)
})

