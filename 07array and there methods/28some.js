/* The some() method is a built-in function in JavaScript that is used to check if at 
least one element in an array satisfies a certain condition. It's used primarily with arrays,
 and it returns a boolean value (true or false) based on whether any element 
in the array matches the specified condition

Here's the basic syntax of the some() method:
array.some(callbackFunction(element, index, array));

array: The array you want to check.
callbackFunction: A function that defines the condition to be tested against each element of the array.
 It takes three arguments: element (the current element being processed), index (the index of the current element),
  and array (the array on which some() was called).
The some() method iterates through the array and applies the condition specified in the callbackFunction to each 
element. If at least one element satisfies the condition, the some() method returns true. If none of the elements satisfy the condition,
 it returns false

 Here's an example to illustrate how the some() method works:
*/
const numbers = [10, 20, 30, 40, 50];

// Check if there is at least one even number in the array
const hasEvenNumber = numbers.some(number => number % 2 === 0);

if (hasEvenNumber) {
  console.log("The array contains at least one even number.");
} else {
  console.log("The array does not contain any even numbers.");
}
