/* reduce
 In JavaScript, the reduce() method is 
 used to reduce an array to a single value 
 by executing a reducer function on each element of the array.*/
//array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
const numbers06 = [1, 2, 3, 4, 5,6];
const sum = numbers06.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum); // Output: 21
const numbers = [1, 2, 3, 4, 5,6];
const sum01 = numbers06.reduce(function(a, b) {
  return a * b;
});
console.log(sum01); // Output: 720