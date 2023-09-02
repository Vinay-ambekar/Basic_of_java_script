/*first senario is that "if we get error in boths error an catch the code will stop there so we 
use finally in after catch as shown bellow " */

/*  try{
 let a=0
 console.log(program)
 console.log("program ran successfully")
}
catch(err){
    console.log("this is an error")
    console.log(p)
}
finally{
    console.log("the code is runing without truoble")
    // *finally is used for clean up
     //   *close the file 
      //  *exit the loop
      //  *wtite to the log file
} 
 */

/* if try, catch, and finally in a function while running the code 
   what ever hanppen inside a try and catch  may be there are error obth or there are no error 
   finally will be run at any cost*/
    
   
   const f=()=>{
    try{
    let b=0
    console.log(x)
     console.log("this is try")
     return
   }
   catch (err){
   // console.log(y) //this is error  and stil finally will run 
    console.log("this is cathc "+ err)  
   }
   finally{
    console.log("this is finally will run at any cost")
   }
}
f()
console.log("end")/* if there is a 'return in try' 'finally is excuted just before the control
returns to the outer code'*/