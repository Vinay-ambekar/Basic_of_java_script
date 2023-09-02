/*
In JavaScript, a class is a blueprint for creating objects with specific properties and methods.
Think of it as a template or a recipe that defines how an object should be created. An object,
on the other hand, is an instance of a class.It's like a cake made from a recipe - the cake is the
object, and the recipe is the class.

*/
class Railwayform{
   
    submit(){
        console.log(this.name+" : your form submited for train number : " + this.trainno)
    }
    cancle(){
        console.log(this.name +" : this form is cancelled for train number : " + this.trainno)
    }
    fill(givenname,trainnumber){
        this.name=givenname
        this.trainno=trainnumber
    }
}
//creat a form for harry
let harryform=new Railwayform()
//fill the form with harry's details
harryform.fill("harry",145325)
//create a form for rohan
let rohanForm1=new Railwayform()
let rohanForm2=new Railwayform()

//fill the form with rohan details

rohanForm1.fill("rohan",122545)
rohanForm2.fill("rohan",122646)
harryform.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancle()