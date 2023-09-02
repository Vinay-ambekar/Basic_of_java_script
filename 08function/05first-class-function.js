/*first class function or first class citizen:->
A function can be passed as an argument to other functions,
can be returned by another function and can be assigned as a value to a variable.*/
//first class function ex 1:/n

var x=function(parm1){
    console.log(parm1)

}

x("\n\nthis is the out put of first class function x :-->" + function(){

})
//ex 2 for first class function:
var m=function(parm6){
    console.log(parm6)
}
function t(){

}

m(t)//function inside a function 


//ex3
var b= function (param3){
    return function(){

    }

}

//first class function 
function first(parm1){
    parm1()//call back function
    }
    first(function d(){
     console.log("hello")
    })
    
    var second=function (parm2){
        parm2()
    }
    let second01=function(){
        console.log("how are you")
    }
    second(second01)
     
    var thiree=function(parm3){
        return function(){
            console.log("i am worry")
        }
    }