
var a = 78
var a = "heloo"
console.log(a)
//var is globally scoped and it can be redecaler
let b = 78
console.log(b)
{
    let b = "hello"
}
// let b="hi" let is scoped and can not redeclared
let c = ''//undefind
console.log(c)
        //const=''erro we have to assign a vlue to the const or it shows error, is scoped and can not redeclared
/* what is scope ?
 the scope in JavaScript refers to where a variable or function is accessible and can be used within your code.
  It determines where in your program a variable can be used and accessed.
   JavaScript has two main types of scope: global scope and local scope.

Global Scope: A variable declared outside of any function is considered to be in the global scope.
 This means that the variable can be accessed from anywhere in your code, both inside and outside functions.

Local Scope: A variable declared inside a function is considered to be in the local scope of that function. 
This means the variable can only be accessed and used within that specific function. 
It's not visible or accessible outside the function.

In summary, scope in JavaScript defines the visibility and accessibility of variables and functions 
in different parts of your code, either globally for the whole program or locally within specific functions.
*/