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


let promise_all=Promise.all([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})