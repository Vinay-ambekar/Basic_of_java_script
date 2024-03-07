let label=document.createElement("label");//create a label
label.textContent='Name:';//set the label text'
/* geting container element or parent element */
let container=document.getElementById("container");
/*appending */
container.appendChild(label);
/*creating input*/
let input=document.createElement("input");
/* setAttribute */
input.setAttribute("placeholder", "Name");
container.appendChild(input);
