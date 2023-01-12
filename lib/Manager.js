//importing parent constructor
const Employee = require("../lib/Employee.");

//extends parent (Employee)
class Engineer extends Employee {
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