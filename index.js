const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./src/templateHTML.js');
const OUTPUT_DIR = path.resolve(__dirname, "dists");
const outputPath = path.join(OUTPUT_DIR, "team.html");

employeeArray = [];
//function to run the application
function runApp () {
    //generates an employee
    function generateEmployee () {
        inquirer.prompt([{
            type: "list",
            message: "Would you like to add an employee to your team?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "Team is full."]
          }])
         //returns the prompt to add another employee
        .then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
            default:
                htmlBuilder();
            }
        })
      }
      //function to add manager and manager's info
      function addManager() {
        inquirer.prompt ([
          
          {
            type: "input",
            name: "managerName",
            message: "Enter manager's name!"
          },
      
          {
            type: "input",
            name: "managerId",
            message: "Enter manager's employee ID number!"
          },
      
          {
            type: "input",
            name: "managerEmail",
            message: "Enter manager's email address!"
          },
      
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter manager's office number!"
          }
        
        ])
        //returns manager's info based on answers provided
        .then(answers => {
          const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
          employeeArray.push(manager);
          generateEmployee();
        });
      }
      //function to add engineer and info
      function addEngineer() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "engineerName",
            message: "Enter name of engineer!"
          },
    
          {
            type: "input",
            name: "engineerId",
            message: "Enter engineer's employee ID number!" 
          },
    
          {
            type: "input",
            name: "engineerEmail",
            message: "Enter engineer's email address!"
          },
    
          {
            type: "input",
            name: "engineerGithub",
            message: "Enter engineer's GitHub username!"
          }
    
        ])
        //returns engineer's info based on answers provided
        .then(answers => {
          const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
          employeeArray.push(engineer);
          generateEmployee();
        });
      }
       //function to add intern
      function addIntern() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "internName",
            message: "Enter intern's name!"
          },
    
          {
            type: "input",
            name: "internId",
            message: "Enter intern's employee ID number!" 
          },
    
          {
            type: "input",
            name: "internEmail",
            message: "Enter intern's email address!"
          },
    
          {
            type: "input",
            name: "internSchool",
            message: "Enter intern's school!"
          }
    
        ])
        //returns intern's info based on answers provided
        .then(answers => {
          const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
          employeeArray.push(intern);
          generateEmployee();
        });
      }
      //function to attach created team to the team html
      function htmlBuilder () {
        console.log("Team created!") //alert after team has been created or option 'team is full is selected'
    
        fs.writeFileSync(outputPath, generateTeam(employeeArray), "UTF-8")
    
    }
    generateEmployee();
    }
    
    runApp();
    

