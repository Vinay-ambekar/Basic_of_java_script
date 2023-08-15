/* concat()

In JavaScript, the concat() method is used to merge two or
 more arrays or combine arrays with additional elements.  */
//array.concat(value1[, value2, ..., valueN])
//Concatenating Two Arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result02 = array1.concat(array2);
console.log(result02); // Output: [1, 2, 3, 4, 5, 6]
//Concatenating Array with Additional Values:
const array03 = [1, 2, 3];
const result03 = array03.concat(4, 5, 6);
console.log(result03); // Output: [1, 2, 3, 4, 5, 6]
//Combining Multiple Arrays:
const array01 = [1, 2];
const array02 = [3, 4];
const array05 = [5, 8];
const result04 = array01.concat(array02, array05);
console.log(result04); // Output: [1, 2, 3, 4, 5, 6]