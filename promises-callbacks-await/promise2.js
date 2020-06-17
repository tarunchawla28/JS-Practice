// function saySomething(string, callback) {
//     console.log(string);
//     callback()
// }

// setTimeout(() => {
//     saySomething("10 seconds passed", ()=>{
//         console.log("error");
//     })
// }, 1000);

const wait = function promise(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}
function saySomething(string) {
    console.log(string);
}
wait(1000).then(() => saySomething("1 second"))
    .catch(() => console.log("error"))