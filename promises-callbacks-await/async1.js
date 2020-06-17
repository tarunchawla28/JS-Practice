const getData1 = async () => {
    var data = 'Hello World';
    return data;
}
const getData2 = async function () {
    var data = 'Hello World';
    return data;
}
const getData3 = async function print() {
    var data = 'Hello World';
    return data;
}

const getData4 = async () => {
    var data = await 'Hello World from Await';
    return data;
}
const getData5 = () => 'Hello World'

console.log(1);
getData4().then((data) => console.log(data));
console.log(2)