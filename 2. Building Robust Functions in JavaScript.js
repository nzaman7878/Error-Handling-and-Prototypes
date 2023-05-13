/* 2. Building Robust Functions in JavaScript
Create a function called getPerson that takes an object as a parameter representing a person's name and age. 
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". 
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw 
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error 
message if it occurs.
// Expected Output
console.log(getPerson({ name: "Mithun", age: 20 })); // Name: Mithun, Age: 20
console.log(getPerson({ name: "Mithun" })); // Invalid parameter type
console. log(getPerson( ["name","Mithun"])); // Invalid parameter type */

function getPerson(obj) {
  try {
    if (typeof obj !== 'object' || !obj.name || !obj.age) {
      throw new Error('Invalid parameter type');
    }
    
    return `Name: ${obj.name}, Age: ${obj.age}`;
  } catch (err) {
    return err.message;
  }
}
console.log(getPerson({ name: "Mithun", age: 20 })); // Output: Name: Mithun, Age: 20
console.log(getPerson({ name: "Mithun" })); // Output: Invalid parameter type
console.log(getPerson(["name:Mithun"])); // Output: Invalid parameter type
