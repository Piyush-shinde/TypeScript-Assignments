function Area(Rad : number ,PI : number = 3.14 ):number
{
    var Ans : number = 0;
    Ans = Rad*Rad*PI;
    return Ans;
}
var Result : number = 0;
Result = Area(5,3.14);
console.log("Area of Circle is "+Result);

Result = Area(5);
console.log("Area of Circle is "+Result);
