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

// var task_names = [];
// for (let i = 0; i < tasks.length; i++) {
//     task_names.push(tasks[i].name)
// }
// for (let i = 0; i < task_names.length; i++) {
//     console.log(task_names[i])
// }

// tasks.forEach(function assign(task) {
//     task_names.push(task.name)
// })

//tasks.forEach(function (task) {
//     task_names.push(task.name)
// })

// tasks.forEach((task) => {
//     task_names.push(task.name)
// });

// task_names.forEach((task_name) => {
//     console.log(task_name)
// })

///************MAP FILTER USE****************

// var task_names = tasks.map(function (task, index, array) {
//     return task.name;
// })

//*****WITH ARROW FUNCTION*******

var task_names = tasks.map((task, index, array) => task.name);
//Since we are not using index and array we can omit them.
task_names.forEach(function (task_name) {
    console.log(task_name)
})