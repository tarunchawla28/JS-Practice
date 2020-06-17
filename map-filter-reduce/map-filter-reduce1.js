var monday = [
    {
        'name': 'Write a tutorial',
        'duration': 180
    },
    {
        'name': 'Some web development',
        'duration': 120
    }
];

var tuesday = [
    {
        'name': 'Keep writing that tutorial',
        'duration': 240
    },
    {
        'name': 'Some more web development',
        'duration': 180
    },
    {
        'name': 'A whole lot of nothing',
        'duration': 240
    }
];

var tasks = [monday, tuesday];
console.log(tasks)

var result = tasks
    .reduce((previous, current) => previous.concat(current))
    .map((task) => task.duration / 60)
    .filter(duration => duration > 2)
    .reduce((previous, current) => [(+previous) + (+current)])
    .map((rate) => rate * 60)
    .map(function (dollar_amount) {
        return '$' + dollar_amount.toFixed(2);
    })[0]

console.log(result)

var result = tasks
    .reduce((previous, current) => previous.concat(current))
    .map((task) => task.duration / 60)
    .filter(duration => duration > 2)
    .reduce((previous, current) => [+previous + +current])
    .map(rate => rate * 60)
    .map(amount => '$' + amount.toFixed(2))[0]
console.log(result)