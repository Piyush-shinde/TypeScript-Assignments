function Maximum(Arr) {
    var max = Arr[0];
    for (var i = 1; i < Arr.length; ++i) {
        if (Arr[i] > max) {
            max = Arr[i];
        }
    }
    return max;
}
var Num = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = Maximum(Num);
console.log("Maximum number is : " + Ret);
