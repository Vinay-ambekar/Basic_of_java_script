/* In JavaScript, the Array.isArray() method is used to determine whether a given value 
is an array or not. It returns true if the value is an array, and false if it's not. This method
 is particularly helpful for handling cases where you want to make sure you're dealing with an array
  before performing array-specific operations. */
  
/* Array.isArray(value);
Where value is the variable you want to check.

Here's an example of how you might use Array.isArray():
*/
const myArray = [1, 2, 3];
const myString = "Hello, world!";
const myObject = { key: "value" };

console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myString)); // false
console.log(Array.isArray(myObject)); // false

if (myArray instanceof Array) {
    console.log('it an array')
  } else {
    console.log("It's not an array")
  }
  