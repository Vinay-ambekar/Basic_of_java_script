/* 
Callback hell, also known as "pyramid of doom," is a term used in JavaScript programming to describe a 
situation where multiple nested callback functions make the code hard to read, understand, and maintain. 
It typically occurs when you have asynchronous operations or callbacks within callbacks within callbacks,
creating a deeply nested structure that can become difficult to manage. */
console.log("star")
setTimeout(function(){
    console.log("hello 01")
    setTimeout(function(){
        console.log(("hello02"))
        setTimeout(function(){
            console.log("hwllo3")
            setTimeout(function(){
                console.log("hello 04")
                setTimeout(()=>{
                    console.log("hello 05")
                },3000)
            },1000)
        },5000)
    },3000)
},2000)
console.log("end")