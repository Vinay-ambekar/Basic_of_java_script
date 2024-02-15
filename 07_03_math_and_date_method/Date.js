console.log('hellow')
console.log(Date())// it show current time date and day year 
let today=new Date()
/* mont date and year */
console.log('month',today.getMonth()+1)//it give month in numbers starting wiht 0(jan=0,feb=1 etc.,)
console.log('date',today.getDate())//it gives date
console.log('year',today.getFullYear())//it give year

/* tiem */
console.log('hour',today.getHours())// it give in 24hour maner
console.log('minuts',today.getMinutes())//it give minuts 
console.log('milisecond',today.getMilliseconds())//give meiliseconds
console.log('seconds',today.getSeconds())//it gives seconds

console.log('dd-mm-yyyy = ',today.getDate()+'-'+ '0'+(today.getMonth()+1) +'-'+today.getFullYear())
console.log('mm-dd-yyyy = ',today.getMonth()+1+'-'+today.getDate()+'-'+today.getFullYear())
console.log('dd.mm.yyyy = ',today.getDate()+'.'+ '0'+(today.getMonth()+1)+'.'+today.getFullYear())
console.log('dd/mm/yyyy = ',today.getDate()+'/'+ '0'+(today.getMonth()+1) +'/'+today.getFullYear())
