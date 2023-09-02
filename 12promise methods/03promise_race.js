let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },5000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2")
    },3000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },5000)
})
let p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject ("Error")
    },4000)
})
 //p2 solved in 3secod  when compared to other three and one of them has error that is p4, if p4 solved first it through error in the console 
 let promise_all=Promise.race([p1,p2,p3,p4])
 promise_all.then((value)=>{
     console.log(value)
 })