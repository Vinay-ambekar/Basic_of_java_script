setTimeout(()=>{console.log("hacking wifi........please wait........")},1000)
try{
console.log(rahul)/*=> this will through an error => 'rahul is not defind'
                    =>  If I put that error out of try the script will stop there it dont go forther for
                     exqution.
                    => for that reason we use try and catch try that code if error occurs pass in to the catch
                    and show in console.log  */ 
}
catch(err){console.log("you handle the error=> "+err)}
setTimeout(()=>{console.log("fetching user name and password........please wait........")},2000)
setTimeout(()=>{console.log("hacking rahul facbook id........please wait........")},3000)
setTimeout(()=>{console.log("username and password of rahul fetched........please wait........")},6000)


/* =>error can not handle if error inside a setTimeout and setTimeout is inside a try 
   => sychronous code can be handle error and asnychronus can not  catch the error
   => script dont stop it will run but we can not catch the error  as shown below  */ 
try {
setTimeout(()=>{
    console.log(xyz)//error
},4000)
}
catch(error){
    console.log(error)
}
/* the same thing we can do inside a setTimeout then it will catch the error  */
setTimeout(()=>{
    try{
        console.log(hello)//error
    }
    catch(er){console.log("inside a setTimeout we catch error => " + er)}
},5000)