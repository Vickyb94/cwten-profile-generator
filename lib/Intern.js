//importing parent constructor
const Employee = require("../lib/Employee.");

//extends parent (Employee)
class Engineer extends Employee {
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