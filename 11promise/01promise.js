/*
In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, 
and its resulting value. Promises are used to handle asynchronous operations in a more structured and manageable way. 
They provide a cleaner alternative to working with callback functions, especially when dealing with multiple asynchronous tasks.

A Promise can be in one of three states:

Pending: The initial state when the Promise is created and the asynchronous operation is in progress.

Fulfilled (Resolved): The state when the asynchronous operation has successfully completed, and the Promise has a resolved value.

Rejected: The state when the asynchronous operation encounters an error or fails, and the Promise has a rejected reason. 
 */
let a=new Promise((resolve,reject)=>{
    resolve('a resolved ')
    //reject(1)
    })
a.then(function(data){
        console.log("a resovle=>",data)
    }).catch((err)=>console.log("a reject=>",err)
    )


 let b=new Promise((resolve,reject)=>{
        //resolve('1')
        reject(2)
        })
b.then(function(data){
        console.log("b resovle=>",data)
    }).catch((err)=>console.log(" b reject=>",err)
    )

    /* ------------------------------------------------ */

    const myPromise = new Promise((resolve, reject) => {
        // Simulate an asynchronous operation, like fetching data from a server
        setTimeout(() => {
          const success = false; // Simulate a successful operation
          if (success) {
            resolve("Data fetched successfully");
          } else {
            reject("Error: Unable to fetch data");
          }
        }, 2000); // Simulate a 2-second delay
      });
      
      myPromise
        .then((result) => {
          console.log(result); // Output: Data fetched successfully
        })
        .catch((error) => {
          console.error(error); // Output: Error: Unable to fetch data
        });
      