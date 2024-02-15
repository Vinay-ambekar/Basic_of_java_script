/* differene between dot and bracket */

let studentName={
    firstName:'vinay',
    rolNum:12,
    present:true
}
console.log(studentName.firstName)//dot 
console.log(studentName['firstName'])//bracket 
/* bracket way we can chage key dynamicaly like */
let a='Name'
console.log(studentName['first'+a])