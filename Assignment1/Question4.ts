function ChkPrime(No1 : number)
{
    for(let i=2;i<No1;i++)
    {
        if(No1%i==0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}
if(ChkPrime(12)==true)
{
    console.log("It is prime number");
}
else
{
    console.log("It is not a prime Number");
}

