function ChkString(Str1 : string) : boolean
{
    var Str2 : string = "Marvellous"

    if(Str2.indexOf(Str1))
    {
        return true
    }
    else
    {
        return false
    } 
}

var Str : string = " Pune Kothrud Marvellous Infosystems" ;

if(ChkString(Str) == true)
{
    console.log("Marvellous contain in string")
}
else
{
    console.log("Marvellous not contain in string")   
}