/* for...of 
In JavaScript, the for...of loop is used to iterate over
 iterable objects, including arrays, strings, maps, sets, and 
 more. It provides a simpler and more 
concise syntax compared to traditional for loops or forEach() */
/* 
for (variable of iterable) {
  // code to be executed for each iteration
}
*/
//1.Iterating over an Array:
const numbers07 = [1, 2, 3, 4, 5];

for (const number of numbers07) {
  console.log(number);
}
//2.Iterating over a String:
const message = "Hello";

for (const char of message) {
  console.log(char);
}
//Iterating over a Map:
const map = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');

for (const [key, value] of map) {
  console.log(key, value);
}