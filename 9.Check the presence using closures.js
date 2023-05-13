/* 9.  Check the presence using closures.
Create a numberchecker function that takes an array of numbers as an argument and returns a function. The 
returned function should take another number as an argument and return true if the number is in the array, and 
false otherwise.
// Expected Result:
const arr = [1, 2, 3, 4, 5];
const checkNum = numberChecker(arr);
console.log(checkNum(3)); // true
console.log(checkNum(6)); // false
*/

function numberChecker(arr) {
  return function(num) {
    return arr.includes(num);
  }
}

const arr = [1, 2, 3, 4, 5];
const checkNum = numberChecker(arr);
console.log(checkNum(3)); // true
console.log(checkNum(6)); // false
