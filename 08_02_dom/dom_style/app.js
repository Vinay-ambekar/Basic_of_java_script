let form=document.querySelector('form');
/* style using 'cssText' */
form.style.cssText='display:flex;flex-direction:column;gap:1rem;';

let label=document.querySelectorAll('label')
for(let i=0;i<label.length;i++){
  /* using style method */
  label[i].style.color='red';
}




