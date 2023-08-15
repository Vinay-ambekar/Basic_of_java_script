/* The flatMap() method is a built-in function in JavaScript that combines the functionalities 
of both map() and flat() in a single step. It's used to transform each element of an array using a 
mapping function and then flattens the result into a new array.

Here's the basic syntax of the flatMap() method:
array.flatMap(callbackFunction(currentValue, index, array), thisArg);

array: The array you want to transform and flatten.
callbackFunction: A function that is called for each element in the array. It takes three arguments:
currentValue: The current element being processed.
index (optional): The index of the current element.
array (optional): The array on which flatMap() was called.
thisArg (optional): An optional value to use as this when executing the callbackFunction.
The flatMap() method applies the mapping function to each element of the array and then flattens the result
 by concatenating the arrays returned by the callback.

Here's an example to illustrate how the flatMap() method works:
*/
const numbers = [1, 2, 3, 4];

// Double each number and return as an array, then flatten the result
const doubledAndFlattened = numbers.flatMap(number => [number * 2]);

console.log(doubledAndFlattened); // Output: [2, 4, 6, 8]
