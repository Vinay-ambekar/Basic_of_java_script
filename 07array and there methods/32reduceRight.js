/* The reduceRight() method is a built-in function in JavaScript that applies a given function 
against an accumulator and each element in the array (from right to left) to reduce the array into a 
single value. It's similar to the reduce() method, 
but it processes the array in reverse order. 

Here's the basic syntax of the reduceRight() method:
array.reduceRight(callbackFunction(accumulator, currentValue, currentIndex, array), initialValue);

array: The array you want to reduce.
callbackFunction: A function that gets called for each element in the array. It takes four arguments:
accumulator: The accumulator accumulates the callback's return values. It carries the result from the last invocation 
of the callback or 
the initialValue, if provided.
currentValue: The current element being processed in the array.
currentIndex (optional): The index of the current element.
array (optional): The array that reduceRight() was called upon.
initialValue (optional): An optional initial value that will be used as the initial value of the accumulator. If not provided, 
the last element in the array will be used as the initial value.
The reduceRight() method iterates over the array in reverse order (from right to left), applying the callback 
function to each element. The accumulator stores the result of the previous callback invocation and the current value 
is passed 
as an argument to the callback function.
*/
const numbers = [10, 20, 30, 40];

// Calculate the sum of the numbers in reverse order
const sum = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // Output: 100 (40 + 30 + 20 + 10)
