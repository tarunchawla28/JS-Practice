async function f() {
    return 1;
}

async function f2() {
    return Promise.resolve(1);
}

function f3() {
    return Promise.resolve(1);
}

f3().then(() => console.log('hey'))

