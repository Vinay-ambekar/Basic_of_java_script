/* The flat() method is a built-in function in JavaScript that is used to flatten nested arrays
 by merging sub-arrays into a single level. This method creates a new array 
with all sub-array elements concatenated together. 

Here's the basic syntax of the flat() method:
array.flat(depth);

array: The array you want to flatten.
depth (optional): An optional parameter that specifies the depth level down to which the nested arrays
 should be flattened. The default value is 1. If you provide a value of Infinity, all levels of nesting will
  be flattened.
The flat() method returns a new array with the flattened elements. It does not modify the original array.

Here's an example to illustrate how the flat() method works:
*/
const nestedArray = [1, [2, 3], [4, [5, 6]]];

const flattenedArray = nestedArray.flat();

console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6]]
/* In this example, the flat() method creates a new array where the sub-arrays are merged into a single level. 
The result is [1, 2, 3, 4, [5, 6]].

If you want to flatten the array completely and remove all levels of nesting, you can provide Infinity 
as the depth parameter: */
const deeplyNestedArray = [1, [2, [3, [4,[5],[6,[7]]]]]];

const fullyFlattenedArray = deeplyNestedArray.flat(Infinity);

console.log(fullyFlattenedArray); // Output: [1, 2, 3, 4]
