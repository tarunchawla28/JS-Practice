var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];

var experience = pilots.reduce((previous, current) => previous + current.years, 0);
console.log(experience)

var mostExpPilot = pilots.reduce((previous, current) => {
    return (previous.years || 0) > current.years ? previous : current
}, {})
console.log(mostExpPilot);

var pilotYears = pilots.reduce((previous, current) => {
    return previous.years > current.years ? previous : current
}, {})
console.log(pilotYears)