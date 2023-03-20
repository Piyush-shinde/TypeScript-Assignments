function DisplayFactor(No1 :number)
{
    for(let i=1;i<No1;i++)
    {
        if(No1 % i==0)
        {
            console.log(i);
        }
    }
}
DisplayFactor(20);