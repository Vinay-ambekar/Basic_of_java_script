/*Local storage is a feature in JavaScript that allows web developers to store data 
locally on a user's browser. This data can be accessed and modified at any time by the JavaScript code
 running on the web page, even after the page has been closed and reopened. 
 
 The use of local storage in JavaScript is primarily to
  provide a way for web applications to save user preferences
   and other small amounts of data that can improve the user experience. 
   For example, a web application might use local storage to remember a user's 
 language preference or their preferred font size.

Local storage is also useful for offline web applications, where the application needs to 
continue functioning even when there is no internet connection. By storing data locally, 
the application can continue to work with the stored data until an internet connection is available again.

In summary, the use of local storage in JavaScript provides a way for web applications to store 
small amounts of data locally on the user's browser, improving the user experience and providing
 a way for offline web applications to continue functioning even without an internet connection.
 */

 let key=prompt("enter key you wat to set")
 let value=prompt("enter the value you want to set")

 localStorage.setItem(key,value)//store key value pair
 console.log(`the value at ${key} is ${localStorage.getItem(key)}`)//get the vlue by key

 if (key =="red" || key=="blue"){
    localStorage.removeItem(key)//this method is used to  remove 
 }
 if(key==0){
    localStorage.clear()//this method is to clear local storage
 }
 console.log("length of the loacal storaage => "+localStorage.length)//check the length of the loacl storage
 console.log(localStorage.key(0))//git the key on given position
 /*
 important note
 1.both key and values must be strings
 2.we can use the tow json methods to store objects in local storage
        JSON.Stingify(object)=>converts objects to json string
        JSON.parse(string)=>converts string to objects(must be valed JSON)
 */
