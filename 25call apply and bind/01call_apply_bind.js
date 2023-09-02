/*  
call, apply and bind are the functions that change the context of the this keyword present
inside the invoking function
*/

/* 
let obj={
    id:100,
    func: function (city,pin) {
        return `${this.fname} ${city} ${pin}`
    }
}
let obj1={
    fname:"ranjeet"
}
let result=obj.func.apply(obj1,["delhi",92])
console.log(result) */

let obj={
    id:100,
    func: function (city,pin) {
        return `${this.fname} ${city} ${pin}`
    }
}
let obj1={
    fname:"ranjeet"
}
let result=obj.func.bind(obj1,"delhi",92)
console.log(result())//if we remove the parenthesis it will print the function 