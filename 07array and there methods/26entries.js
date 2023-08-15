/* In JavaScript, the entries() method is used with arrays to create an iterator 
that produces key-value pairs for each element in the array. Each key-value pair consists
 of an index (the key) and the corresponding value at that index.

The basic syntax for using the entries() method is as follows:

array.entries();

The entries() method returns an iterator object that you can use to iterate through the array's key-value pairs.

Here's an example of using the entries() method:

*/
const fruits = ["apple", "banana", "orange"];

const iterator = fruits.entries();

for (const entry of iterator) {
  console.log(entry);
}

/* 
In this example, the entries() method creates an iterator, and the for...of loop is 
used to iterate through the key-value pairs. Each entry is an array containing the index as 
the first element and the corresponding value as the second element.

You can also use array destructuring to directly access the key and value of each entry:
*/
const fruits01 = ["apple", "banana", "orange"];

const iterator01 = fruits01.entries();
for (const [index, value] of iterator01) {
    console.log(`Index: ${index}, Value: ${value}`);
  }
  