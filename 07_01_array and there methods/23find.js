/* 
In JavaScript, the find() method is used to retrieve the first element from an array 
that satisfies a given testing function. It returns the value of the first element that passes the test,
 or undefined if no element passes the test. */
 /* 
 The basic syntax of the find() method is as follows:
 array.find(function(element) {
  // Your testing logic here
});

Here's a breakdown of how the method works:

The provided function is applied to each element in the array, one by one.
The function is passed the current element as an argument.
If the testing logic within the function returns true for an element, that element is returned as the result.
If no element satisfies the testing logic, the find() method returns undefined.

 */

//Here's an example of using find() to find the first even number in an array:
const numbers = [1, 3, 5, 6, 7, 8, 9, 10];
const firstEven = numbers.find(function(number) {
  return number % 2 === 0;
});

console.log(firstEven); // 6
//arrow function
const numbers01 = [1, 2, 5, 6, 7, 8, 9, 10];
const firstEven01 = numbers01.find(number => number % 2 === 0);

console.log(firstEven01); // 2
//If no element passes the test, the find() method returns undefined:

const numbers02 = [1, 3, 5, 7, 9];
const firstEven02 = numbers02.find(number => number % 2 === 0);

console.log(firstEven02); // undefined

/* It's important to note that the find() method only returns the first matching element.
 If you need to find all elements that satisfy
 a condition, you can use the filter() method instead */
 const numbers03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers03.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
