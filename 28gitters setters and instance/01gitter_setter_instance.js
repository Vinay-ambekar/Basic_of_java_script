class Animal{
    constructor(name){
        this.name1=name
    }
    fly(){
        console.log("mai ud rha hu")
    }
    get name(){
        return this.name1
    }
    
     set name(newName){
        return this.name1=newName
    } 
}
let a=new Animal("bruno")
a.fly()
console.log(a.name)
a.name='jack'
console.log(a.name)
let c=56

console.log( a instanceof Animal)//true a is bleong to class animal
console.log( c instanceof Animal)//false c is not bleong to class animal if c belogn to any calss it become true