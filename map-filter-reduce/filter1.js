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

var difficult_tasks = [];
//***********USING ARROW FUNCTION*************
// difficult_tasks = tasks.filter(task => task.duration > 80);

//***********USING FOR EACH METHORD***********
tasks.forEach(task => {
    if (task.duration >= 120) {
        difficult_tasks.push(task)
    }
})
difficult_tasks.forEach(function (task) {
    console.log(task);
})