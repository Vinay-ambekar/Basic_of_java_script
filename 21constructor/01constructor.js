class Employee {
    constructor(name){
        console.log( name +` ${name} employee constructor is here`)
        this.name=name
    }
    login() {
      console.log(`Employee has logged in`);
    }
    logout() {
      console.log(`Employee has logged out`);
    }
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves `);
    }
  }
  
  class Programmer extends Employee {
    constructor(name){
      super(name)
      console.log(`this is a neavly writen constructor`)//constructor method override or voer wirte 
      //everthying shoud below the super
    }
 /*    constructor(...arg){ --->  automatically parent constructor is deploy by java script ingine
        super(...arg)
    } */
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffee`);
    }
    requestLeaves() {
        super.requestLeaves(4)//is used to replace same as it is in the 'above class' or parnet class
        console.log("one extra leaves is granted")
      //console.log(`Employee has requested ${leaves + 1} leaves (one extra)`);using paranthisis'()' for method  overriding
    }
  }
  
  let p = new Programmer("harry");
  p.login();
  p.requestLeaves(3);
  p.requestCoffee(3);
  