/* The from() method is a built-in function in JavaScript that is used to create a
 new array from an array-like or iterable object. This method is often used to convert objects 
 that are "array-like" (such as DOM elements or strings) or iterable objects (such as Sets or Maps) 
 into actual arrays.

Here's the basic syntax of the from() method:
Array.from(iterable, mapFunction, thisArg);

iterable: The object you want to convert into an array.
mapFunction (optional): A function that is called for each element of the iterable and is used to map 
each element to a new value in the resulting array.
thisArg (optional): An optional value to use as this when executing the mapFunction.
The from() method returns a new array based on the elements in the iterable or array-like object.

Here's an example to illustrate how the from() method works:
*/
// Convert a string into an array of characters
const str = "hello";
const charArray = Array.from(str);

console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']

/* In this example, the from() method converts the string "hello" into an array of characters.

You can also provide a mapFunction to modify the elements during the conversion: */
// Convert an array-like object into an array with doubled values
const arrayLike = { length: 3, 0: 1, 1: 2, 2: 3 };
const doubledArray = Array.from(arrayLike, num => num * 2);

console.log(doubledArray); // Output: [2, 4, 6]
