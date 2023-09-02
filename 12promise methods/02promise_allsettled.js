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
//p4 has error  and give output of p1,p2,p3,p4 and we can see the status and value 
let promise_all=Promise.allSettled([p1,p2,p3,p4])
promise_all.then((value)=>{
    console.log(value)
})