/* Promise chaining in JavaScript refers to the practice of linking multiple Promise objects together 
to create a sequence of asynchronous operations that execute one after the other. It allows you to control the flow of asynchronous tasks,
 ensuring that they are executed in a specific order, and handle the results or errors at each step.

Here's a simple definition:

Promise Chaining: A technique in JavaScript where you chain multiple Promise objects together using the .
then() method to define what should happen after each Promise resolves, creating a sequence of asynchronous operations
 with a clear and ordered flow. */

//promise chaining do to avoid nested promise
console.log("start");
const b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 5000);
})
  .then(function (result) {
    console.log(result);
    return result * 4;
  })
  .then(function (result1) {
    console.log(result1);
    return result1 * 4;
  })
  .then(function (result2) {
    console.log(result2);
  })
  .catch(function (error) {
    console.error(error);
  });

console.log("end")  

/* -------------------------------------------------- */
/* function performAsyncTask1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Async Task 1 completed");
        resolve(1);
      }, 1000);
    });
  }
  
  function performAsyncTask2(resultFromTask1) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Async Task 2 completed with result:", resultFromTask1);
        resolve(2);
      }, 1000);
    });
  }
  
  performAsyncTask1()
    .then((result1) => {
      return performAsyncTask2(result1); // Promise chaining
    })
    .then((result2) => {
      console.log("All tasks completed:", result2);
    });
   */