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
}

module.exports = Manager;
