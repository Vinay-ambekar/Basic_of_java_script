/*In JavaScript, the lastIndexOf() method is used to find the last occurrence of
 a specified value within an array or a string. This method works similarly to indexOf(),
  but instead of finding the first occurrence, it finds the last occurrence of the specified value. 
  It returns the index of the last 
occurrence of the value or -1 if the value is not found.*/

/* 
Here's the basic syntax for using lastIndexOf() with arrays:
array.lastIndexOf(searchValue, startIndex);

And for using lastIndexOf() with strings:
string.lastIndexOf(searchValue, startIndex);

*/
//example for array
const fruits = ["apple", "banana", "orange", "apple", "grape"];
const lastIndexOfApple = fruits.lastIndexOf("apple");
console.log(lastIndexOfApple); // 3

const lastIndexOfOrange = fruits.lastIndexOf("orange");
console.log(lastIndexOfOrange); // 2

const lastIndexOfPineapple = fruits.lastIndexOf("pineapple");
console.log(lastIndexOfPineapple); // -1 (not found)

//example for string
const sentence = "Helloworld!Howareyou?Hello!";
const lastIndexOfHello = sentence.lastIndexOf("Hello");
console.log(lastIndexOfHello); // 27

const lastIndexOfGoodbye = sentence.lastIndexOf("goodbye");
console.log(lastIndexOfGoodbye); // -1 (not found)
