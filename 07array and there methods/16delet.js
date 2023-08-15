/* delet()
In JavaScript, the delete operator is used to delete a 
property from an object or to remove an element from an array. 
*/
//Deleting a Property from an Object:
const person02= {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  delete person02.age;
  console.log(person02); // Output: {name: "John", city: "New York"}
  //Deleting an Element from an Array:
  const numbers10 = [1, 2, 3, 4, 5];
  delete numbers10[2];
  console.log(numbers10); // Output: [1, 2, undefined, 4, 5]