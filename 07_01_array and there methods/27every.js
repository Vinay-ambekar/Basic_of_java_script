/* In JavaScript, the every() method is used to test whether all elements in 
an array pass a certain condition specified by a provided testing function. 
It returns a boolean value (true or false) based on whether all elements satisfy the given condition.

The basic syntax for using the every() method is as follows:

array.every(function(element) {
  // Your testing logic here
});

Here's how the method works:

The provided function is applied to each element in the array.
The function is passed the current element as an argument.
If the testing logic within the function returns true for all elements, the every() method returns true.
If the testing logic returns false for at least one element, the method returns false.

Here's an example of using every() to check if all numbers in an array are even:

*/
const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven); // true
//using arrow function
const numbers01 = [2, 4, 6, 8, 9];

const allEven01 = numbers01.every(number => number % 2 === 0);

console.log(allEven01); // false
//example
const words = ["apple", "banana", "grape", "pear"];

const allHaveMinLength = words.every(word => word.length >= 3);

console.log(allHaveMinLength); // true
