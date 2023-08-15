/* 
The copyWithin() method is a built-in function in JavaScript that allows you to copy a 
portion of an array and place it at a specified target position within the same array. 
This method modifies the original array in place and does not create a new array.

Here's the basic syntax of the copyWithin() method:
array.copyWithin(target, start, end);

array: The array you want to modify.
target: The index at which to start overwriting elements with the copied values.
start (optional): The index of the first element to be copied. The default is 0 (the beginning of the array).
end (optional): The index (exclusive) at which to stop copying. The default is the length of the array.
The copyWithin() method copies the elements from the specified start to end range and places them at the target 
position. It does not change the length of the array but may modify existing values if they overlap with the copied
 region.

Here's an example to illustrate how the copyWithin() method works:

*/
const numbers = [1, 2, 3, 4, 5];

// Copy elements from index 1 to 3 and place them starting from index 2
numbers.copyWithin(2, 1, 4);

console.log(numbers); // Output: [1, 2, 2, 3, 4]
/* In this example, the copyWithin() method copies the elements at indices 1, 2, and 3 ([2, 3, 4]) and places them 
at indices 2, 3, and 4 in the array. As a result, the elements at indices 2 and 3 are overwritten with the
 copied values.

If the copied region overlaps with the target position or goes beyond the length of the array,
 the behavior can be a bit complex. For example: */
 const numbers01 = [1, 2, 3, 4, 5];

// Copy elements from index 0 to 2 and place them starting from index 1
numbers01.copyWithin(1, 0, 3);

console.log(numbers01); // Output: [1, 1, 2, 3, 5]
