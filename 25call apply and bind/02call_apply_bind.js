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
console.log(result)