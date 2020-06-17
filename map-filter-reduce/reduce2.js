var total = [1, 2, 3, 4, 5].reduce((previous, current, index) => {
    var value = previous + current;
    console.log('The previous value is ' + previous);
    console.log('The current value is ' + current);
    console.log('The current iteration is ' + (index + 1));
    return value;
}, 0)

console.log('The loop is done, the final value is ', total);


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

var total_time = 0;
tasks.forEach(function (task) {
    total_time += (+task.duration)
});
console.log(total_time)

var total_time_reduce = tasks.reduce(function (previous, current) {
    console.log('Previous ' + previous)
    console.log('Current ' + current.duration)
    return previous + current.duration;
},0)
console.log("total_time_reduce" + total_time_reduce)

var total_time_reduce_arrow = tasks.reduce((previous, current) => previous + current.duration, 0);
console.log(total_time_reduce_arrow);

var array_of_arrays = [[1, 2], [3, 4], [5, 6]];
var concatenated = array_of_arrays.reduce((previous, current) => {
    console.log('Previous ' + previous)
    return previous.concat(current)
});
console.log(concatenated)

//************REDUCE-RIGHT********** */
var array_of_arrays = [[1, 2], [3, 4], [5, 6]];
var concatenated = array_of_arrays.reduceRight((previous, current) => previous.concat(current));
console.log(concatenated)