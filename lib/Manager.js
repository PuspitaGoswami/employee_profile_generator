// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Import the Employee class
const Employee = require('./Employee');

// Define the Manager class that extends Employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager';
  }
  getOfficeNumber(){
    return this.officeNumber;
  }
}
module.exports =  Manager;
