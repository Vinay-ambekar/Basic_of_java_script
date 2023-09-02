
function x(){
    var a=7
    function y(){
        console.log(a)
    }
    return y;
}
var z=x()
console.log(z)//--->it print function y(){console.log(a)}
z()//-->print '7' 
