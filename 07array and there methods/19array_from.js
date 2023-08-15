/* Array.from()
In JavaScript, the Array.from() method is used to create 
a new array from an iterable object or an array-like object. 

Array.from(iterable[, mapFn[, thisArg]])
*/
//Converting a string to an array:
const str03= 'Hello';
const arr = Array.from(str03);
console.log(arr); // Output: ['H', 'e', 'l', 'l', 'o']
//Converting a Set to an array:
const set02= new Set([1, 2, 3]);
const arr02= Array.from(set02);
console.log(arr02); // Output: [1, 2, 3]
//Mapping function during conversion:
const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
const arr03 = Array.from(arrayLike, function(item) {
  return item.toUpperCase();
});
console.log(arr03); // Output: ['A', 'B', 'C']
