//importing parent constructor
const Employee = require("../lib/Employee.js");

//extends parent (Employee)
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email) //parent properties
      this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;