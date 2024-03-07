/* adding form insid a section tag */
let input=document.querySelector('section')

/* know using innerHTML adding input form */
input.innerHTML='<lable>First Name:</lable><input type=text placeholder=fristname>'
input.style.cssText='border:1px solid black;border-radius:10px;display:flex;flex-direction:column;gap:20px;width:300px;padding:20px;margin-left:40%'

/* type of way to adding html like 'innerhtml',"'creat' and 'appendChild'",'document.write'and 'insertAdjacentHTML' */

/* 'creat' and 'appendChild' */

/* creating a label tag */
let text=document.createElement('p')
text.style.cssText='margin-left: 46%;'
/* inside a label tag we are adding text */
text.textContent='Created by Vinay'
/* we are appending the label tag inside a section tag using append */
document.body.appendChild(text)

/* creating a label tag  */
let label_second_name=document.createElement('label')
label_second_name.textContent = 'Last Name:';
/* creating a input tag wich consit of property */
let input_2nd_name=document.createElement('input')
input_2nd_name.setAttribute('type', 'text');
input_2nd_name.setAttribute('placeholder', 'Last Name');
/* appending the label and input elements to the section element */
input.appendChild(label_second_name);
input.appendChild(input_2nd_name);

/* insertAdjacentHTML */
input.insertAdjacentHTML('beforeend', '<input type="submit" value="submit" >');
/* 
'beforebegin': Inserts the HTML string immediately before the specified element.
'afterbegin': Inserts the HTML string as the first child of the specified element.
'beforeend': Inserts the HTML string as the last child of the specified element.
'afterend': Inserts the HTML string immediately after the specified element.
*/