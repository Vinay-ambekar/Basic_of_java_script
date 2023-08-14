/*slice()
In JavaScript, the slice() method is used to extract a
 portion of an array 
and return a new array containing the selected elements. 
 */
//array.slice(start, end);
//Extracting a portion of an array:
var numbers02 = [1, 2, 3, 4, 5];
var slicedNumbers = numbers02.slice(1, 4);
console.log(slicedNumbers); // Output: [2, 3, 4]
console.log(numbers02); // Output: [1, 2, 3, 4, 5]
//Extracting from a specific index to the end:
var fruits02 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
var slicedFruits = fruits02.slice(2);
console.log(slicedFruits); // Output: ["orange", "grape", "kiwi"]
console.log(fruits02); // Output: ["apple", "banana", "orange", "grape", "kiwi"]
//Extracting a portion of an array using negative indices:
var letters = ['a', 'b', 'c', 'd', 'e'];
var slicedLetters = letters.slice(-3, -1);
console.log(slicedLetters); // Output: ["c", "d"]
console.log(letters); // Output: ["a", "b", "c", "d", "e"]