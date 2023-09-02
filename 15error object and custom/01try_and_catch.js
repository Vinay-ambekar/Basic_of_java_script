try {
    let age=160
    age=Number.parseInt(age)
    if (age>150){throw new ReferenceError("This is probably not true")}
    
}
catch(err){
    console.log(err.name)
//console.log(err.message)
//console.log(err.stack)

}
console.log("the script is still running")