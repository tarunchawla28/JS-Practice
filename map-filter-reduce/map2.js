var tasks = [
    {
        'name': 'Write for Envato Tuts+',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on Duolingo',
        'duration': 240
    }
]

var map = function (array, callback) {
    var new_array = [];
    array.forEach(element => {
        new_array.push(callback(element))
    });
    return new_array;
}

var task_names = map(tasks, function (element) {
    return element.name;
})

task_names.forEach(name => {
    console.log(name)
})