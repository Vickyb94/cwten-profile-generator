//importing parent constructor
const Employee = require("../lib/Employee.js");

//extends parent (Employee)
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email) //parent properties
      this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {  //overides parent role
        return "Engineer"
    }
}

module.exports = Engineer;