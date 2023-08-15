/* forEach()
forEach() that allows you to iterate over the elements of
an array or the values of a map or set. It provides a 
convenient way to perform an operation 
on each element/value without the need for manual indexing.*/
//Iterating over an Array:
/*const numbers08= [1, 2, 3, 4, 5]
numbers08.forEach(function(number) {
  console.log(number);
});
//Iterating over a Map:
const map03 = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');

map03.forEach(function(value, key) {
  console.log(key, value);
});
o/p
1 'one'
2 'two'
3 'three' 
 
//Iterating over a Set:
const set = new Set([1, 2, 3, 4, 5]);
set.forEach(function(value) {
  console.log(value);
});*/


//for each 
/*  
array.forEach(function(currentValue, index, array) {
  // Your code here, where currentValue is the current element,
  // index is the index of the current element, and array is the original array.
});

*/
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log(`Element at index ${index}: ${number}`);
});
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
