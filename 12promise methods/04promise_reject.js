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
//it give i am error
let promise_all=Promise.reject("i am error")
promise_all.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})