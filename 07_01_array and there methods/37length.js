/* In JavaScript, the length property is not a method; it's a property of arrays,
 strings, and other objects that represents the number of elements or characters in
  the array or string. It's a fundamental property that provides information about the size
   or length of the object.

Here's how you can access the length property for different types of objects: 

For Arrays:

The length property of an array represents the number of elements contained within the array. 
It's a non-negative integer that indicates the size of the array.*/
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // Output: 3
/* For Strings:

The length property of a string represents the number of characters in the string. It's a non-negative integer 
that indicates the length of the string. */
const text = 'Hello, world!';
console.log(text.length); // Output: 13

/* For Other Objects:

Some objects may have a length property, but it's not a standard property for 
all objects. When length is used on other objects, it might not represent the number 
of elements or characters. The behavior of the length property depends on how the object has been implemented.

The length property is commonly used to iterate over arrays using loops or to check the length of strings.
 It's important to note that the length property is a read-only property, which means you can't directly set 
 it to a new value. Instead, you modify the array or string by adding or removing elements, and the length property
  will automatically reflect those changes. 
  For example, when adding elements to an array, the length property is updated:*/
  const numbers = [1, 2, 3];
numbers.push(4); // Add an element
console.log(numbers.length); // Output: 4
//Similarly, when manipulating strings:
const text01 = 'Hello';
const newText = text01 + ', world!'; // Concatenate strings
console.log(newText.length); // Output: 13
/* completed */