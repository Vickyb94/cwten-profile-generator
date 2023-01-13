//importing parent constructor
const Employee = require("../lib/Employee.js");

//extends parent (Employee)
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email) //parent properties
      this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;