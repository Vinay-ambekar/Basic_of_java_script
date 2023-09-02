/*
Object-oriented programming (OOP) in JavaScript is a programming paradigm that uses objects
 to represent data and behaviors. In OOP, objects are created from classes or constructor functions, 
 and they encapsulate data and functionality into a single entity. This allows developers to organize 
 their code into reusable and modular components, making it easier to maintain and extend over time.

JavaScript has several features that make it a powerful object-oriented programming language, including:

Objects and prototypes: In JavaScript, objects can be created using object literals or constructor 
functions, and they can inherit properties and methods from other objects using the prototype chain.

Encapsulation: JavaScript supports encapsulation by using closures and private variables, 
which allow developers to hide implementation details and expose a public interface for their objects.

Inheritance: JavaScript supports inheritance through the prototype chain, which allows objects to inherit 
properties and methods from their parent objects.

Polymorphism: JavaScript supports polymorphism through dynamic typing and function overloading, 
which allows developers tocreate functions that can accept multiple 
types of arguments and behave differently based on the input.

*/

/*
four pillars
Abstraction:hide internal details

Encapceluation:for example in pile or tablet there is vitamin a b e c d and different tpes protine
is encapcelutaed in single pile or tablet.

inheritance:feature upgrading on old application

polymorphism:one thing use for many kind example mobile can use for calling, video recoding, watching movies etc.,

*/
//proto type
let a={
    name1:"harry",
    language:"javascript",
    run:()=>{
        alert("sel run")
    }
}
console.log(a)
let p={
    run:()=>{
        alert("run")
    }
}
p.__proto__={
    name:"jacki"
}
a.__proto__=p
a.run()
console.log(a.name)