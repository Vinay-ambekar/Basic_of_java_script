
userobj={
    name:"ajay",
    age:28
}
function userinfo(obj){
    return function(userinfo){
        return obj[userinfo]
    }
}
let res=userinfo(userobj);
console.log('name :'+res('name'))
console.log('age :'+res('age'))