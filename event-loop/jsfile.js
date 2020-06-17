function first() {
    console.log("First")
}

function second() {
    console.log("Second");
}

function third() {
    console.log("Third")
}

first();
setTimeout(second, 1000);
third();

