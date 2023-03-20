function Maximum(Arr : number[]) : number
{
    let max : number = 0;
    let Secondlarge : number = -1; 
    for(let i = 1; i < Arr.length; i++)
    {
        if(Arr[i]>Arr[max])
        {
            max = i;
        }
    }

    for(let i = 0; i < Arr.length; i++)
    {
        if(Arr[i]!=Arr[max])
        {
            if(Secondlarge ==-1)
            {
                Secondlarge=i;
            }
            else if(Arr[i]>Arr[Secondlarge])
            {
                Secondlarge=i;
            }
        }
    }
    return Arr[Secondlarge];

}

var Num : number[] = [23,89,6,29,56,45,77,32];
var Ret : number = 0;
Ret=Maximum(Num);
console.log("Second Maximum number is : "+Ret);