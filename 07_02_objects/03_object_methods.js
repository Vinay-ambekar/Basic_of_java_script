/*object methods*/
/* key and vlaue methods */
let worker={
    name:'valeria',
    work:true,
    salary:12335,
    contactNo:123447554
}

/* how to delte key values */
delete worker.contactNo
console.log('contactNo is deleted = ',worker)
/* hasownproperty method which chek the given key and 
if it present  gives true or obsent gives  false */
console.log(worker.hasOwnProperty('name'))//true
console.log(worker.hasOwnProperty('nae'))//false

/* static methods of objects */

/* how to get only key using key mehtod */
console.log(Object.keys(worker))//keys method

/* how to get only value using value method */
console.log(Object.values(worker))//vlaues mehtod

/* Object.entries() method it gieve key and value in array of arrays */
console.log(Object.entries(worker))

/* object.assign() method is merge to objects  */
let obje1={
    name:'diya',
    age:21,
    country:'india'
}
console.log(Object.assign(obje1,worker))
/* two object is merging but name has same key but 
differet value the value is showing of worker same key 
and different value it only shows last parameter of the Object.assign() method
 */

//object.freeze():
/*  1.it can not add new propety and  value
    2.it can not be modified in the exisiting propety*/
//object.seat()
/* 1.it can not be added new propet=rty or  value
2.it can modified the exisisting propery or value*/

//object.freeze() method:
Object.freeze(obje1)//it can not add new key and vlaue to the object, it can not modifiy the value.
obje1.city='cta'//adding new key and value to bject1
obje1.age=25//modefie the value 21 to 25, key remain same
console.log(obje1)

let obj2={
    name:'hasan',
    age:24,
    collage:'RES',
    year:'final'
}
Object.seal(obj2)//it can not add new key and vlue to that, we can modify
obj2.pass=true//add new key and value
obj2.age=19//modified the vlaue 25 to 19 ,of key age
console.log(obj2)
