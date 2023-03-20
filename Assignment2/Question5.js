function ChkString(Str1) {
    var Str2 = "Marvellous";
    if (Str2.indexOf(Str1)) {
        return true;
    }
    else {
        return false;
    }
}
var Str = " Pune Kothrud Marvelous Infosystems";
if (ChkString(Str) == true) {
    console.log("Marvellous contain in string");
}
else {
    console.log("Marvellous not contain in string");
}
