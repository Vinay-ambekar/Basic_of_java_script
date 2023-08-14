/* forEach()
forEach() that allows you to iterate over the elements of
an array or the values of a map or set. It provides a 
convenient way to perform an operation 
on each element/value without the need for manual indexing.*/
//Iterating over an Array:
const numbers08= [1, 2, 3, 4, 5]
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
/*o/p
1 'one'
2 'two'
3 'three' 
 */
//Iterating over a Set:
const set = new Set([1, 2, 3, 4, 5]);
set.forEach(function(value) {
  console.log(value);
});
