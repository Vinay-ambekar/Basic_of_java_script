/* Certainly! In JavaScript, the includes() method is used to check whether an array, string,
 or other iterable object contains a specific element or value. It returns a boolean value indicating
  whether the element is found in the array or string. 
  
  Here's the basic syntax for using includes():
  For arrays:
  array.includes(searchElement, fromIndex);

  For strings:
    string.includes(searchString, position);

javascript
Copy code
string.includes(searchString, position);
array or string: The array or string in which you want to search for the value.
searchElement or searchString: The element or string you want to search for within the array or string.
fromIndex (for arrays) or position (for strings, optional): The index at which to start searching. If not provided, 
the search will start from the beginning.
  */
 //Here are examples of using includes() with an array:
 const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false

//string
const message = "Hello, world!";

console.log(message.includes("world")); // true
console.log(message.includes("universe")); // false

//specific index
const numbers01 = [1, 2, 3, 4, 5];

console.log(numbers01.includes(2, 2)); // false (search starts from index 2)
console.log(numbers01.includes(3, 2)); // true (search starts from index 2)


