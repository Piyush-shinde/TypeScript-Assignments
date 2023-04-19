var Circle = /** @class */ (function () {
    function Circle(Radius) {
        this.PI = 3.14;
        this.Radius = Radius;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
// Create objects and call method
var obj1 = new Circle(5);
var obj2 = new Circle(7);
console.log("Area of obj1:", obj1.Area());
console.log("Area of obj2:", obj2.Area());
