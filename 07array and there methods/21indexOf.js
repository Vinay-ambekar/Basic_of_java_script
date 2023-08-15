/* In JavaScript, the indexOf() method is used to find the first occurrence of a
 specified value within an array or a string. This method returns the index of the
  first occurrence of the specified value, or -1 if the value is not found. */
  /* 
  Here's the basic syntax for using indexOf() with arrays:
  array.indexOf(searchValue, startIndex);

  And for using indexOf() with strings:
  string.indexOf(searchValue, startIndex);

  array or string: The array or string in which you want to search for the value.
searchValue: The value you want to search for within the array or string.
startIndex (optional): The index at which to start searching. If not provided, 
the search will start from the beginning.
 */
//for array
const fruits = ["apple", "banana", "orange", "apple", "grape"];
const indexOfApple = fruits.indexOf("apple");
console.log(indexOfApple); // 0

const indexOfOrange = fruits.indexOf("orange");
console.log(indexOfOrange); // 2

const indexOfPineapple = fruits.indexOf("pineapple");
console.log(indexOfPineapple); // -1 (not found)

//for string
const sentence = "Hello, world! How are you?";
const indexOfWorld = sentence.indexOf("world");
console.log(indexOfWorld); // 7

const indexOfGoodbye = sentence.indexOf("goodbye");
console.log(indexOfGoodbye); // -1 (not found)

//search How in sentence

const searchValue = "are";
let index = sentence.indexOf(searchValue);

while (index !== -1) {
  console.log(`result=> Found at index ${index}`);
  index = sentence.indexOf( +searchValue, index + 1);
}
