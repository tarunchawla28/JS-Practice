// var p = new Promise(function (resolve, reject) {
//     foo.bar();
//     resolve(200);
// })

// p.then(function fulfilled() {
//     console.log("success")
// }, function () {
//     console.log("error");
// })

// var p = new Promise(function (resolve, reject) {
//     resolve(200);
// })
// p.then(function success(code) {
//     foo.bar();
//     console.log(code)
// }, function () {
//     console.log("Error")
// })
// .done(null, function(){
//     console.log("Inside done")
// })

var p = Promise.resolve(374);

p.then(function fulfilled(msg){
    // numbers don't have string functions,
    // so will throw an error
    console.log(msg.toLowerCase());
})
.done(null, function() {
    // If an exception is caused here, it will be thrown globally 
});