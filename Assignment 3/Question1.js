var Arithmetic = /** @class */ (function () {
    function Arithmetic(Number1, Number2) {
        this.Number1 = Number1;
        this.Number2 = Number2;
    }
    Arithmetic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmetic.prototype.Subtraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithmetic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithmetic;
}());
// Create objects and call methods
var obj1 = new Arithmetic(10, 5);
var obj2 = new Arithmetic(20, 3);
console.log("Addition obj1:", obj1.Addition());
console.log("Subtraction obj1:", obj1.Subtraction());
console.log("Multiplication obj1:", obj1.Multiplication());
console.log("Division obj1:", obj1.Division());
console.log("Addition obj2:", obj2.Addition());
console.log("Subtraction obj2:", obj2.Subtraction());
console.log("Multiplication obj2:", obj2.Multiplication());
console.log("Division obj2:", obj2.Division());
