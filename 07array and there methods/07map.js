/* map()
In JavaScript, the map() method is used to create a
 new array by applying a transformation function to
  each element of an existing array.
   It iterates over the elements of the array and
    calls the provided function for each element,
 generating a new value for each element. */
 //array.map(callback(currentValue, index, array));
/* 
1.callback: The function to be called for each element in the array.
 2.currentValue: The current element being processed in the array.
 3.index (optional): The index of the current element being processed.
 4.array (optional): The array on which the map() method was called.
 */
//1.Transforming an array of numbers:
const numbers03 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers03.map((number) => {
  return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
console.log(numbers03); // Output: [1, 2, 3, 4, 5]
//2.Modifying an array of objects:
const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 19 }
  ];
  const studentNames = students.map((student) => {
    return student.name;
  });
  console.log(studentNames); // Output: ["Alice", "Bob", "Charlie"]
  console.log(students); // Output: [Object, Object, Object]
//3.Using concise arrow function syntax:
const numbers04 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers04.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers04); // Output: [1, 2, 3, 4, 5]