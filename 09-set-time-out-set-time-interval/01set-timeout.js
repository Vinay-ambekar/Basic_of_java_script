
const sum=(a,b,c)=> {
    console.log("yes i am running " +(a+b+c))
    }
    setTimeout(sum,3000,1,2,9)//after  only one second it will show the out put console.log() and add 1 ,2 and 9 and show 12

    let a=setTimeout(function(){
        console.log("i am inside of settimeout")
     },5000)//it show the  message in small box afer 5 seconds

     console.log('i am running')