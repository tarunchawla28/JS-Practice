function defer(f, ms) {
    console.log(this);
    return function (...args) {
        console.log(this);
        let ctx = this;
        setTimeout(function () {
            console.log(this)
            return f.apply(ctx, args);
            //return f(args);
        }, ms);
    };
}

function sayHi(who) {
    alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds

// var car = { 
//     registrationNumber: "GA12345",
//     brand: "Toyota",

//     displayDetails: function(ownerName){
//         console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
//     }
// }
// var myCarDetails = car.displayDetails.bind(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota
// myCarDetails()
// var myCarDetails = car.displayDetails.apply(car, ["Vivian"]); // Vivian, this is your car: GA12345 Toyota

