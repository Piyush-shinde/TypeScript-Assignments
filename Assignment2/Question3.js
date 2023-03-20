function Maximum(Arr) {
    var max = 0;
    var Secondlarge = -1;
    for (var i = 1; i < Arr.length; i++) {
        if (Arr[i] > Arr[max]) {
            max = i;
        }
    }
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] != Arr[max]) {
            if (Secondlarge == -1) {
                Secondlarge = i;
            }
            else if (Arr[i] > Arr[Secondlarge]) {
                Secondlarge = i;
            }
        }
    }
    return Arr[Secondlarge];
}
var Num = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = Maximum(Num);
console.log("Second Maximum number is : " + Ret);
