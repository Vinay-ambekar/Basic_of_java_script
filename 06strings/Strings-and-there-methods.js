let name01="harry"// inside a double colon harry is string 
console.log(name01)
console.log('length of name01 = ',name01.length)//tell the length of the string
let a=`heloo i am ${name01}`//here we are using backtiks
console.log(a)
let x='Adom D\'Angelo '//out put Adom D'Angelo, \n for new line
console.log(x)

/* upper case to lower , lower to upper case methods */
console.log('upper case = ',name01.toUpperCase())//print HARRY
console.log('Lower case = ',name01.toLowerCase())//print harry

/* slice method */
console.log('slice method with 2 value = ',name01.slice(2,4))//it print from 2 to 4 that is rr
console.log('slice method with one value =',name01.slice(2))//it print from 2 that is rry

/* replace  */
console.log('replace it has two value = ',x.replace("Adom","vini"))//out put vini D'Angelo, it replace Adom with vini 
/* trime method remove starting and ending space */
let y='      hello    '
console.log('trime remove space at end = ',y.trim())//removes strarting white space
console.log(name01[0])//prints h

/*CharAt*/
let str01='ui developer'
console.log('charAt input value is index fot that output give letters  ',str01.charAt(3))// at 3rd index plade d is there in str01
console.log(str01.charCodeAt('u'));//u as unic cod on keyboards 

/* concat */
let str02='ux developer,'
console.log(str02.concat(str01))//joins two or more two string and return new string;

/* indexOf */
let str03='indexOfe'
console.log(str03.indexOf('e'))//it give first occurrence and serch from strating of the index. 
console.log(str03.lastIndexOf('e'))//it give last occurrence of the value searching from backwards.

/* includes */
let str04='substring'
console.log(str04.includes('s'))//it serch for s if it is in the string it give true or else show false.

/* substr  and substring*/ //**** 
let str05='substr'
console.log(str05.substr(2,3));//substr has two value starindex and length ,firt vlaue takes starting index vlue and start counting from 0 to given index value.
console.log(str05.substring(2,3))//substring has two vlaue strating index and endindex, it takes the first value and continue to count from that index value.

/* touppercase and to lowercase*/
let str06='touppercase'
console.log(str06.toUpperCase())
let str07='TOLOWERCASE'
console.log(str07.toLocaleLowerCase())

/* split */
let str08='apple,banna,orange';
console.log(str08.split(','))//In JavaScript, the split() method is used to split a string into an array of substrings based on a specified separator.

