async function myAsyncFunction() {
    // First promise
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Promise 1 executed after 2 seconds");
        resolve();
      }, 2000);
    });
    
    // Wait for promise1 to finish before moving on to the next promise
    await promise1;
    
    // Second promise
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Promise 2 executed after 3 seconds");
        resolve();
      }, 3000);
    });
    
    // Wait for promise2 to finish before finishing the async function
    await promise2;
    
    console.log("Async function finished executing");
  }
  
  myAsyncFunction();

   