hoistedFuncDeclaration();
function hoistedFuncDeclaration() {
    console.log('This function has been hoisted')
}

//***************These 3 will not work******************
// hoistedFuncExpression();
// var hoistedFuncExpression = () => {
//     console.log('This will not work')
// }

// hoistedFuncExpression2();
// var hoistedFuncExpression2=function(){
//     console.log('This will not work')
// }

hoistedFuncExpression3();
var hoistedFuncExpression3 = function hoisting() {
    console.log('This will not work')
}