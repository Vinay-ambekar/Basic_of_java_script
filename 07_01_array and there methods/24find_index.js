/* In JavaScript, the findIndex() method is used to find the index of the first
 element in an array that satisfies a provided testing function. It's similar to 
 the find() method, but instead of returning the value of the element, it returns
 the index of that element. 
If no element passes the test, findIndex() returns -1. */

/* 
Here's the basic syntax of the findIndex() method:
array.findIndex(function(element) {
  // Your testing logic here
});

Here's a breakdown of how the method works:

The provided function is applied to each element in the array, one by one.
The function is passed the current element as an argument.
If the testing logic within the function returns true for an element, the index of that element is
 returned as the result.
If no element satisfies the testing logic, the findIndex() method returns -1.

*/
const numbers = [1, 3, 5, 6, 7, 8, 9, 10];
const firstEvenIndex = numbers.findIndex(function(number) {
  return number % 2 === 0;
});

console.log(firstEvenIndex); // 3
//using arrow function
const numbers01= [1, 2, 5, 6, 7, 8, 9, 10];
const firstEvenIndex01 = numbers01.findIndex(number => number % 2 === 0);

console.log(firstEvenIndex01); // 1
//If no element passes the test, the findIndex() method returns -1:
const numbers02 = [1, 3, 5, 7, 9];
const firstEvenIndex02 = numbers02.findIndex(number => number % 2 === 0);

console.log(firstEvenIndex02); // -1

/* 
Similar to find(), the findIndex() method only returns the index of the first matching element.
 If you need to find the indices of all elements that satisfy a condition, you might consider 
 using other techniques such as loops and the filter() method.
*/
const numbers03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenIndices = numbers03.reduce((indices, number, index) => {
  if (number % 2 === 0) {
    indices.push(index);
  }
  return indices;
}, []);

console.log(evenIndices); // [1, 3, 5, 7, 9]
