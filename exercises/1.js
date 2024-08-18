/*
Write a function that takes a sorted Array of integers as an argument,
 and returns an array that includes all of the missing integers (in order) 
 between the first and last elements of the argument.
*/

function missing(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];
  let allBetween = [];
  for (let index = first + 1; index < last; index++) {
    allBetween.push(index);
  }
  return allBetween.filter(element => !arr.includes(element));
}

let p = console.log;

p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6]));              // []