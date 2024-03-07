/*we can use on event or we can ues event listenre  */
/*on events for keydown  */
function first_name(){/*whe key is pressed down then this function trigered  */
  let name=document.querySelector('input[name="name"]').value;
  console.log(name);
  let wName=document.getElementById('name')
  wName.innerHTML=`${name}`
}
/*using evetn listener keyup  */
/*when key is presed down and released than the below function is trigered  */
let submit=document.querySelector('input[type="email"]');
submit.addEventListener('keyup',function(event){
  console.log(event.target.value)
  let etext=document.getElementById('email')
  etext.innerHTML=`${event.target.value}`
});
/* keypress using event listner*/
let texts = document.getElementsByTagName('textarea');
    
for (let i = 0; i < texts.length; i++) {
    texts[i].addEventListener('keypress', function(event) {
        console.log('Key pressed:', event.key);
    });
}