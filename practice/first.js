function greet() {
    alert('HI there');
}

function greet(name) {
    alert('HI there ' + name);
}

function greet(arg1, arg2, arg3) {
    return `${arg1} ${arg2} ${arg3}`;
}

greet();
greet('Shashank');
alert(greet('yo', 'yo', 'yo'));
// const task3Element = document.getElementById('task-3');

// task3Element.addEventListener('click', greet); 

