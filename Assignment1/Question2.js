function Area(Rad, PI) {
    if (PI === void 0) { PI = 3.14; }
    var Ans = 0;
    Ans = Rad * Rad * PI;
    return Ans;
}
var Result = 0;
Result = Area(5, 3.14);
console.log("Area of Circle is " + Result);
Result = Area(5);
console.log("Area of Circle is " + Result);
