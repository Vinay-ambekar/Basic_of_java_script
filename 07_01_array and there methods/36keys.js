/* The keys() method is a built-in function in JavaScript that is used to create an 
iterator object that represents the keys (indices) of an array. This iterator can be used to 
loop through the indices of an array or to retrieve the keys in various ways.

Here's the basic syntax of the keys() method: 
array.keys();

array: The array for which you want to create an iterator for its keys.
The keys() method returns an iterator object that provides access to the keys (indices) of the array. 
You can then use this iterator to iterate over the keys or use the iterator methods like next().

Here's an example to illustrate how the keys() method works:
*/
const fruits = ["apple", "banana", "cherry"];

const keysIterator = fruits.keys();

console.log(keysIterator.next()); // Output: { value: 0, done: false }
console.log(keysIterator.next()); // Output: { value: 1, done: false }
console.log(keysIterator.next()); // Output: { value: 2, done: false }
console.log(keysIterator.next()); // Output: { value: undefined, done: true }
