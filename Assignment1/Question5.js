function Fibonacci(No1) {
    var n1 = 0;
    var n2 = 1;
    var n3 = 0;
    console.log(n1);
    console.log(n2);
    for (var i = 2; i < No1; ++i) {
        if (n3 < No1) {
            n3 = n1 + n2;
            console.log(n3);
            n1 = n2;
            n2 = n3;
        }
    }
}
Fibonacci(21);
