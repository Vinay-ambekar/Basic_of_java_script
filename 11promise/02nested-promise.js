/* Nested promise chaining in JavaScript refers to the practice of chaining multiple Promise objects together
 in a nested structure to handle a sequence of asynchronous operations one after the other. 
This allows you to control the flow of asynchronous tasks and ensure that they execute in a specific order.

Here's a simple definition:

Nested promise chaining: A technique in JavaScript where you chain multiple Promises together inside each other, 
specifying what should happen after one Promise resolves, potentially leading to a chain of asynchronous operations with 
sequential control flow. */
//nested promise
const a = (x, y) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x * y);
      }, 2000);
    });
  };
  
  a(1, 5)
    .then((mul) => {
      console.log(mul);
      return a(mul, 5).then((mul1) => {
        console.log(mul1);
        return a(mul1, 5).then((mul2) => {
          console.log("end of nested promis=>"+ mul2);
          //return a(mul2,5)
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
    /* -------------------------------------------------------- example 02 */
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
    
    // Nested Promises
    performAsyncTask1()
      .then((result1) => {
        return performAsyncTask2(result1); // Nested Promise
      })
      .then((result2) => {
        console.log("All tasks completed:", result2);
      });
     */