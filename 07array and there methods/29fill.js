/* The fill() method is a built-in function in JavaScript that is used to change the values of elements
 in an array with a specified value. 
It modifies the original array by replacing elements starting from a given index with the specified value. 

Here's the basic syntax of the fill() method:
array.fill(value, start, end);

array: The array you want to modify.
value: The value that you want to fill the array with.
start (optional): The index at which the filling starts. The default is 0 (the beginning of the array).
end (optional): The index at which the filling ends. The default is the length of the array.
The fill() method doesn't create a new array; it directly modifies the elements in the existing array.

Here's an example to illustrate how the fill() method works:


*/
const numbers = [1, 2, 3, 4, 5];

// Fill the array with the value 0 from index 2 to 4 (inclusive)
numbers.fill(0, 2, 5);

console.log(numbers); // Output: [1, 2, 0, 0, 0]

/* In this example, the fill() method replaces the elements at indices 2, 3, and 4
 with the value 0, resulting in the modified numbers array.

You can also use the fill() method without specifying the 
start and end parameters to fill the entire array with a specific value: */

const array = [1, 2, 3, 4, 5];

// Fill the entire array with the value 0
array.fill(0);

console.log(array); // Output: [0, 0, 0, 0, 0]
