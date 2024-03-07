/* selcttin by tag name and styleing*/
        let section = document.getElementsByTagName('section')[0];
        /* styling the section tag */
        section.style.border = '1px solid black';
        section.style.backgroundColor = 'lightgray';
        section.style.padding = '10px';
 /* selecting by class name and styling */
        let container=document.getElementsByClassName('container')[0];
        /* styling container */
        container.style.cssText='background-color:yellow;padding:10px;border-radius:10px'
/* selecting by id and styling*/
        let table=document.getElementById('table').style.border='2px solid gray'
        
/* selectig by querselector we can selcet by tag,id and class*/ 
        let tableHead=document.querySelector('th').style.color='red'//selcet only one firs element either it was by id, clss or tag name
 /* selecting by qureselectorall and styling */       
        let tbody=document.querySelectorAll('td')
/* how can we select all index value in tbody */
/* using for loop */
for (let i=0;i<tbody.length;i++){
    tbody[i].style.color='orange'
}
