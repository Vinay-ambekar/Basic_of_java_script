let label=document.querySelector('label');
/* inner html only in empty tag element */
label.innerHTML = 'name:';
let div=document.getElementById('name');
/* here using inner html with 'backtik' */
div.innerHTML = `
<input type="text" name="name" id="name" placeholder="enter your name">`;
/*innerAdjecentelement beforebegin*/
div.insertAdjacentHTML('beforebegin', '<p>Before div tag</p>')
/*innerAdjecentelement after*/
div.insertAdjacentHTML('afterend', '<p>After div tag</p>')