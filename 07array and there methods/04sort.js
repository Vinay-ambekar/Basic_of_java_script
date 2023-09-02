/* sort()
In JavaScript, the sort() method is used to sort the elements 
of an array in place, meaning it modifies the original array. 
The sorting is performed based on the 
Unicode values of the elements by default. Here's an example: */
//example1
var fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "orange"]
//example2
var mixedArray = [10, 2, 5, 1,'s','a',''];
mixedArray.sort();
console.log(mixedArray); // Output: [1, 10, 2, 5]
//example3
var numberss = [10, 2, 5, 1];
numberss.sort(function(a, b) {
  return a - b;
});
console.log(numberss); // Output: [1, 2, 5, 10]
//example4
var numbrs = [10, 2, 5, 1];
numbrs.sort((a, b) => a - b);
console.log(numbrs); // Output: [1, 2, 5, 10]