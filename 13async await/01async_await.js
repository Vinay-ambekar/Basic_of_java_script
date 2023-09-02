/*definition of sync/await
The async function declaration declares an async function where the await keyword is permitted within the function body. 
The async and await keywords enable asynchronous,
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.
*/
function bng(){
    let bangloreWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Bangalore weather is 27 deg");
      }, 4000);
    });
    return bangloreWeather
  }

function cta(){
    let chitradurgaWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Chitradurga weather is 32 deg");
      }, 2000);
    });
    return chitradurgaWeather
}
    /* 
    the below given code .then() is to get resolve from promise but if bot are resolve at same time
    non of them are not going to wait to complete.means it is not going to complete one by one it will
    start at same time and who has a less time they will complete first and who has more time they will
    complete last.      */
 
    /* the below given code says that
    untill the bngw compete its asynchrons task it will not go to another asynchronsu opration,
    after the completion of bngw asnchrons task it will move to  another asynchronsu opration that is ctaw*/
    async function harry() {
        console.log("Fetching Bangalore Weather. Please wait....");
        let bngw = await bng()
        console.log("Fetching Bangalore weather is => " + bngw);
        
      console.log("Fetching Chitradurga Weather. Please wait....");
        let ctaw = await cta()
        console.log("Fetching Chitradurga weather is => " + ctaw);
        
        return [bngw, ctaw];
        }
      
      console.log("Welcome to Weather Control Room");
      let a = harry();
    
      //console.log(a) or
      a.then((value) => {
        console.log(value)
      
      }).catch((err)=>{console.log(err)})