/* Cookies in JavaScript are small pieces of data that websites can store on a user's browser.
 They are used to remember information about the user, such as their preferences or login 
status, and can be accessed by both the server and client-side scripts.

Cookies work by sending a small text file from the website's server to the user's browser, 
which is then stored on the user's computer. Whenever the user visits the same website 
again, the browser sends the cookie back to the server along with the request.

Cookies can be created, read, and deleted using JavaScript, 
and they are commonly used for a variety of purposes, including:

1.Storing user preferences: Cookies can be used to store user preferences, such as their
 language preference, font size, and color scheme.
2.Remembering user login information: Cookies can be used to store user login
  information, so that users don't have to log in every time they visit a website.
3.Tracking user behavior: Cookies can be used to track user behavior on a website, such as 
the pages they visit and the links they click on. This information can be used to 
personalize the user experience and to provide targeted advertising.
4.Analyzing website traffic: Cookies can be used to track website traffic, such as the
number of visitors and the time spent on the site. This information can be used to
improve the website's performance and to optimize its design.
*/
//alert(document.cookie)//to see cookies doument.cokie
//cookies saparated by ';' semicolen
//i am settin my own cookies
//to set a cookies
 document.cookie="name=harry1233"//add 'name=harry1233' cookie
document.cookie="name2=harry3216646464"//add another cookie "name=harry3216646464"
document.cookie="n1=harry3216646464"
document.cookie="n1=heloo"//it replace the above 'n1'

console.log(document.cookie) 

//encoding and decoding in cookie
let key=prompt("enter your key")
let value=prompt("enter your value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//we are using encodeURIComponent to encod
//in key ';' if we put semicolen it was not recoginse properly so we use ecoding 
//to decode use decodeURIComponent("code")
document.cookie="1=2(1st cookie) ; 3=4(2nd cookie)" //only one cookie can be set in 'document.cookie'
console.log(document.cookie)
/*note
1.name= should not execd 4kb
2.20+ cookie per domain is limited
we can set path of the cookie
document.cookie= "user=harry; path=/a;expires=Tue,29 March 20h 05:18:22GMT"
*/