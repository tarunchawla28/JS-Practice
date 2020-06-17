function list() {
    console.log(arguments)
    return Array.prototype.slice.call(arguments);
}
function addArguments(arg1, arg2) {
    console.log(arguments)
    return arg1 + arg2;
}
const list1 = list(1, 2, 3);
console.log(list1);

const result1 = addArguments(1, 2);
console.log(result1)

const leadingThirtysevenList = list.bind(null, 37);
// console.log(leadingThirtysevenList());
// console.log(this.list())

// const addThirtySeven = addArguments.bind(null, 37, 12);
// console.log(addThirtySeven())

const addThirtySeven = addArguments.bind(null, 37);
// console.log(addThirtySeven())

const list2 = leadingThirtysevenList();
console.log(list2);

const list3 = leadingThirtysevenList(1, 2, 3);
console.log(list3);

const result2 = addThirtySeven(5);
console.log(result2);

const result3 = addThirtySeven(5, 10);
console.log(result3)

