function Armstorng(n : number) : boolean
{
    var temp = n;
    var reminder : number = 0;
    var Sum : number = 0;

    while(n > 0)
    {
        reminder = n % 10

        Sum = Sum + (reminder*reminder*reminder)

        n = n / 10;
    }
    if(temp == Sum)
    {
        return true
    }
    else 
    {
        return false
    }
}

var No : number = 153 ;
if(Armstorng(No) == true)
{
    console.log("153 is armstrong number")
}
else
{
    console.log("153 is not armstrong number")   
}