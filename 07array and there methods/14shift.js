/* shift()
In JavaScript, the shift() method is 
used to remove and return the first element from an array */
const fruits04= ['apple', 'banana', 'orange'];
const shiftedElement = fruits04.shift();
console.log(shiftedElement); // Output: "apple"
console.log(fruits04); // Output: ["banana", "orange"]

//Here's an example with an empty array:
const emptyArray = [];
const shiftedElement01 = emptyArray.shift();
console.log(shiftedElement01); // Output: undefined
console.log(emptyArray); // Output: []