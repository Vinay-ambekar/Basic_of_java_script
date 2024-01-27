//for loop
console.log('for loop')
for (let i = 0; i <= 5; i++) {
    console.log("Iteration number: " + i);
}

//for in loop
console.log('for in loop')
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    salary:30000
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}
  /* The for-in loop is useful when you need to perform operations on each property of an object,
 such as accessing or manipulating its values dynamically */

 //for of loop
 console.log('for of loop')
 const fruits = ['apple', 'banana', 'orange','grapes'];
 
for (let fruit of fruits) {
  console.log(fruit);
}

const person01= {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (let [key, value] of Object.entries(person01)) {
    console.log(key + ': ' + value);
  }
  
/* The for-of loop simplifies the process of iterating over iterable objects,
 as you don't need to manage an index or access elements using indexing */

 //while loop
 console.log("while loop")
 let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}
/* That's a basic explanation of the while loop in JavaScript. 
It's a useful construct when you want to repeat a block of code until a certain condition is no longer true. */

//do while loop
//do {
    // Code to be executed
  //} while (condition);
 //example
 
console.log("do while loop")
let number=0
do {
  number++
  /* console.log(number) */

} while (number < 5 );

console.log("counted:", number);

//how to stop the loop and continue the looop

//stop
console.log("Break")
for (let a = 1; a <= 5; a++) {
    if (a === 3) {
      break; // Stops the loop when i is equal to 3
    }
    console.log(a);
  }
  
  //continue
  console.log("continue")
  for (let b = 1; b <= 5; b++) {
    if (b === 3) {
      
     console.log("I am 3 and i continue to count ")
      continue; // it will coutinue to count upto 5 , if i remove count it will stop at 3
    }
    console.log(b);
  }
  