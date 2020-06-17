// function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework`)
//     callback();
// };

// doHomework('math', function () {
//     alert('Finished my homework')
// })

function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework`);
    callback(new Error("Error"), 'Work');
}

function alertFinished(error, work) {
    alert(`Finished my ${work}`);
}

doHomework('math', alertFinished)

//It’s called the “error-first callback” style.