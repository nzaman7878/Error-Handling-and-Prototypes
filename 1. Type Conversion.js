/* 1. Type Conversion.
Write a function called convertToNumber that takes a string as an argument and returns the equivalent 
number. If the string cannot be converted to a number, the function should return the string "Invalid number". 
Use error handling in javascript to achieve this output.
// Expected Results 
convertToNumber("123") // 123
convertToNumber("abc") // "Invalid number" */

function convertToNumber(str) {
  const num = Number(str);
  
  if (Number.isNaN(num)) {
    return "Invalid number";
  }
  
  return num;
}
console.log(convertToNumber("123")); // Output: 123
console.log(convertToNumber("abc")); // Output: "Invalid number"
