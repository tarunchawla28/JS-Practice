let group = {
    title: 'Our group',
    students: ['One', 'Two', 'Three'],
    valueThis: this,
    showMethod() {
        console.log(this);
        function innerFuncMethod() {
            console.log("Inner1", this)
        }
        innerFuncMethod()
        // innerFuncMethod()
    },
    showFunc: function showFunction() {
        console.log(this);
        function innerFuncFunc() {
            console.log("Inner2", this)
        }
        innerFuncFunc()
    },
    showArrowFunc: () => {
        console.log("Arrow", this);
    },
    showList() {
        this.students.forEach(function (student) {
            // Error: Cannot read property 'title' of undefined

            console.log('yo');
            console.log(this.title);
            // alert(this.title + ': ' + student)
        }.bind(this));
    }
    // showList() {
    //     this.students.forEach(function (student) {
    //         // Error: Cannot read property 'title' of undefined

    //         console.log('yo');
    //         console.log(this);
    //         // alert(this.title + ': ' + student)
    //     });
    // }
}

var a = 10;
group.showMethod();
group.showFunc();
group.showArrowFunc()
group.showList()
console.log(group.valueThis);