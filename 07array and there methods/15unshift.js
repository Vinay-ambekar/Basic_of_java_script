/* 
unshift()
In JavaScript, the unshift() method is used 
to add one or more elements to the beginning of an array.
*/
//array.unshift(element1[, element2, ..., elementN])
const fruits08 = ['banana', 'orange'];
fruits08.unshift('apple');
console.log(fruits08); // Output: ["apple", "banana", "orange"]

const numbers09 = [3, 4, 5];

numbers09.unshift(1, 2);

console.log(numbers09); // Output: [1, 2, 3, 4, 5]
