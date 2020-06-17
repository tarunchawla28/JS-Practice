function Point(x, y) {
    this.x = x;
    this.y = y
    console.log(x + ' ' + y)
    console.log(this)
    this.method=function(){

    }
}
Point.prototype.toString = function () {
    // return `${this.x},${this.y}`;
    return this.x + ' ' + this.y
}
const p = new Point(1, 2);
console.log(p.toString());

// const yAxisPoint = Point.bind(null, 10);
// yAxisPoint(30);
const emptyObj = {};
const yAxisPoint2 = Point.bind(emptyObj, 20);
const axisPoint = new yAxisPoint2(30);
console.log(axisPoint.toString())
// console.log(axisPoint.toString())

console.log(axisPoint instanceof Point);
console.log(axisPoint instanceof yAxisPoint2)
console.log(new yAxisPoint2(17, 42) instanceof Point)

var obj=new Point(100,200);
console.log(obj)