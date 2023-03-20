function Fibonacci(No1 : number)
{
    var n1 : number = 0;
    var n2 : number = 1;
    var n3 : number = 0;
    console.log(n1);
    console.log(n2);
    for(let i=2;i<No1;++i)
    {
        
        if(n3<No1)
        {
            n3=n1+n2;
            console.log(n3);
            n1=n2;
            n2=n3;
        }

    }
}
Fibonacci(21);