class Animal{
    constructor(name,color){
    this.name=name
    this.color=color
  }
  run(){
    console.log(this.name+" is running")
  
  }
  shout(){
    console.log(this.name+" is barking")
  }
  }
  class Monkey extends Animal{/*'extends key word used to extand another key word', 
  the monkey class  is joind with animal class */
    eatBanana(){
      console.log(this.name+" is eating banana")
    }
    hide(){
      console.log(`${this.name}  is hiding`)
    }
  
  }
  let ani=new Animal("bruno","white")
  let m=new Monkey("chipu","orange")
  ani.shout()
  m.eatBanana()
  m.run()
  m.hide()
  //ani.hide()//>showing error
  