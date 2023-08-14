/* splice()
In JavaScript, the splice() method is used to modify an 
array by adding, removing, or replacing elements.
 It can be used to add elements at a specific position, 
 remove elements from a specific position, 
 or both simultaneously. 
Here's the syntax for using splice():*/
//array.splice(start, deleteCount, item1, item2, ...);
 /* 1.start: The index at which the modification should begin.
 2.deleteCount: The number of elements to be removed from the array (optional).
 3.item1, item2, ...: Elements to be added to the array at the specified position (optional). */
 //Adding elements to an array:
 var numbers01= [1, 2, 3, 4];
numbers01.splice(2, 0, 5, 6);
console.log(numbers01); // Output: [1, 2, 5, 6, 3, 4]
//2.Removing elements from an array:
var fruits01 = ['apple', 'banana', 'orange', 'grape'];
var removedFruits01 = fruits01.splice(1, 2);
console.log(removedFruits01); // Output: ["banana", "orange"]
console.log(fruits01); // Output: ["apple", "grape"]
//3.Replacing elements in an array:
var colors = ['red', 'green', 'blue'];
var replacedColors = colors.splice(1, 1, 'yellow', 'purple');
console.log(replacedColors); // Output: ["green"]
console.log(colors); // Output: ["red", "yellow", "purple", "blue"]