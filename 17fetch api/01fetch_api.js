/*An API (Application Programming Interface) in JavaScript is a set of protocols, routines, and 
tools that allow software components to interact with each other. In simple terms, 
an API acts as a bridge between different programs, enabling them to share data and functionality. 
To use an API in JavaScript, developers typically make requests to API endpoints using the fetch() function,
 and process the response data as needed.
 
 There are different types of APIs in JavaScript, including:

1.Web APIs - These are APIs built into web browsers that allow developers to interact with web-based 
features such as the Document Object Model (DOM), XMLHttpRequest (XHR) objects, and the Fetch API.

2.Third-party APIs - These are APIs provided by third-party services that allow developers to access 
data or functionality provided by those services. Examples include weather APIs, payment APIs, 
and social media APIs.

To use an API in JavaScript, you typically need to make a request to the API endpoint using the fetch()
 function, which returns a Promise that resolves to the response data. You can then 
 process the data as needed, typically by converting it to a JavaScript object using the .json() method.*/


/* J.S can be used to send and return information from the network when needed (AJAX)
  'fetch API': is used to get data over the network
  let promise =fetch(url,[options]),without options a get request is sent
  */ 
  let p=fetch("https://goweather.herokuapp.com/weather/Ny")
  p.then((response)=>{
      console.log(response.status)
      console.log(response.ok)
      console.log(response.headers)
      return response.json()
  }).then((value2)=>{console.log(value2) })
  /* getting a response is a 2-stage process
  1.an object of response class containing "status  and ok properties"
   2.after that we need to call another method to access the body in different formats
   
   "body method => resposn.tex(),respons.json(),respons.froamtadata() " we can use one body method */