/*  jion

In JavaScript, the join() method is used to create
 a string by joining the elements of an array together
*/
//Joining an Array with Default Separator:
const fruits03 = ['a+b', 'b+c', 'c+a','abc'];
const result = fruits03.join('=');
console.log(result); // Output: "apple,banana,orange"
//Joining an Array with Custom Separator:
const colors01= ['red', 'green', 'blue'];
const result01 = colors01.join('-');
console.log(result01); // Output: "red-green-blue"