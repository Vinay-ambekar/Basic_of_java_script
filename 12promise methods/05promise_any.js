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
//it give output of p2 because it is the vlue first compare to all three 
let promise_all=Promise.any([p1,p2,p3,p4])
promise_all.then((value)=>{
    console.log(value)
}) 