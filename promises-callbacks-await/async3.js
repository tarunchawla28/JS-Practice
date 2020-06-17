async function f1() {

    //Below one is  parallel

    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('Done p1'), 2000)
    // })
    // // console.log(promise);
    // let promise2 = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('Done p2'), 2000)
    // })
    // let result1 = await promise;
    // let result2 = await promise2;
    // console.log(result1);
    // console.log(result2);
    // // console.log(promise2);

    // Below one is  Sequential

    let promise = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('Done p1'), 2000)
    })
    console.log(promise);
    let promise2 = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('Done p2'), 2000)
    })
    console.log(promise2);

};
f1()