let arr=[1,2,3,4,5,6,7,8]
/* let a= arr[0]
let b= arr[1]
let c= arr[2] */
//or
/* let[a,b,c,d, ...rest]=arr
console.log(a,b,c,d,rest)    *///--->it prints 1 2 3 4 [ 5 6 7 8]
//or
/* let [a, ,b,...reset]=arr
console.log(a,b,reset) *///--->it prints 1 3[4 5 6 7 8]
//or
/* let{a,b}={a:1,b:5}
console.log(a,b) *///--->it prints 1 5

//spread operator

 let arr1=[3,5,8]
let obj1={...arr1}
console.log(obj1) 
function sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(...arr1)) //--> o/p => 16

let obj2={
    name:"harry",
    company:"company xyz",
    addres:"xyz"

}
console.log({...obj2})
console.log({...obj2,name:"jhon"})//---name harry change to jhon remaining will same