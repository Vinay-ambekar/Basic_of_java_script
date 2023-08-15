/* reverse()
In JavaScript, the reverse() method is used
 to reverse the order of elements in an array
*/
const array08= [1, 2, 3, 4, 5];
array08.reverse();
console.log(array08); // Output: [5, 4, 3, 2, 1]
//** revers the string*/
const str = 'Hello, World!';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // Output: '!dlroW ,olleH'