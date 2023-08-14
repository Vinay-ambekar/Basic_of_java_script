/* filter()
 In JavaScript, the filter() method is used to create a
  new array containing 
 elements from an existing array that meet certain criteria.*/
//array.filter(callback(element[, index[, array]])[, thisArg])

const numbers05 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers05.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]