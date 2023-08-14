/* for...in
In JavaScript, the for...in 
loop is used to iterate over the properties of an object. */
/* 
for (variable in object) {
  // code to be executed for each property
}
*/
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
  //hasOwnProperty():
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(key + ': ' + person[key]);
    }
  }
  