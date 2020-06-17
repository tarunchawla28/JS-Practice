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

var filter = function (array, callback) {
    var filtered_array = [];
    array.forEach((element, index, array) => {
        if (callback(element, index, array)) {
            filtered_array.push(element)
        }
    });
    return filtered_array;
}

var new_array = filter(tasks, function (element, index, array) {
    return element.duration >= 120
})

new_array.forEach((element) => console.log(element))

