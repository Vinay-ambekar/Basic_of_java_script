/* conversion */

/* number string to number  */
let a='10' //is a number string
let b=Number(a);//method one
console.log(typeof a)//string
console.log(typeof b)//number
console.log(b)
console.log( +a)//second method

//parsint method
let c=10.253
console.log(parseInt(c))//it do not give decimal 
let d="10.55lseklsk";
console.log(parseInt(d))
console.log(typeof d)
let e="hello"+10

console.log(e)//string
let x=10+'10'
console.log(x)//string o/p 1010

let result = "Hello" / 2;
console.log(result);// NaN

//parsfloat method
let number01='100.253554'
console.log(parseFloat(number01))//it give decimal value 
let number02='10.6316356lkjsdfsdf4654'
console.log(parseFloat(number02))//it give decimal value removes alpabets and 

/* number to strings and boolean to string */
 
/* using string method */
let str01=true;
console.log(typeof str01)
console.log(str01)
console.log(String(str01))//converted to string

let str02=20022
console.log(String(str02))//conveted to string

/* using tostring  method*/

console.log(str01.toString())//conveted to string
console.log(str02.toString())//conveted to string

/* boolean values and conversion */
let val01='';//empty false
let val02=null;//false 
let val03=undefined;//false
let val04=0;//false
let val05=false;//false 
//Boolean() :false
console.log(Boolean(val01),Boolean(val02), Boolean(val03),Boolean(val04),Boolean(val04),Boolean(val05),Boolean())

let val06=' '
let val07=132;
let val08='hello'
let val09=true
let val10=-10
let val11=1.2255

console.log(Boolean(val06),Boolean(val07),Boolean(val08),Boolean(val09),Boolean(val10),Boolean(val11))

