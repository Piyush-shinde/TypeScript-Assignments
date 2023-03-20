function Maximum(Arr : number[]) : number
{
    let max = Arr[0];
    for(let i = 1; i < Arr.length; ++i)
    {
        if(Arr[i]>max)
        {
            max = Arr[i];
        }
    }
    return max;
}

var Num : number[] = [23,89,6,29,56,45,77,32];
var Ret : number = 0;
Ret=Maximum(Num);
console.log("Maximum number is : "+Ret);