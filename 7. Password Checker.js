/* 7.  Password Checker.
Create a class called User with properties username and password. Implement a getter method for password 
that returns the password with all characters replaced by asterisks. Implement a setter method for password 
that checks if the new password is at least 8 characters long and contains at least one number and one 
uppercase letter. If the password is valid, set the new password. If not, log an error message.
// Expected output:
const user = new User("Mithun", "Passwordl23"); 
console.log(user.getPassword()); // ***********

user.setPassword("myPassword");      // Error : Password must be at least 8
characters long and contain at least one number and uppercase letter 
user.setPassword("MyPassword");      // Error : Password must be at least 8
characters long and contain at least one number and uppercase letter 
user.setPassword("Mypasswordl23");
console.log(user.getPassword()); // ************* */

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getPassword() {
    return this.password.replace(/./g, '*');
  }

  setPassword(newPassword) {
    const hasNumber = /\d/.test(newPassword);
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const isValid = newPassword.length >= 8 && hasNumber && hasUpperCase;

    if (isValid) {
      this.password = newPassword;
    } else {
      console.log('Error: Password must be at least 8 characters long and contain at least one number and uppercase letter');
    }
  }
}


const user = new User("Mithun", "Passwordl23"); 
console.log(user.getPassword()); // ***********

user.setPassword("myPassword");      // Error : Password must be at least 8 characters long and contain at least one number and uppercase letter 
user.setPassword("MyPassword");      // Error : Password must be at least 8 characters long and contain at least one number and uppercase letter 
user.setPassword("Mypasswordl23");
console.log(user.getPassword()); // *************
