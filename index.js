// Install packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// Require neccesary (local) paths for future use
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");


// ---- Primary Function that prompts users with questions to obtain team member information -----
function getMembers() {
    inquirer
      .prompt([
        {
          type: 'list',
          message: "Please classify the team member you would like to add?",
          name: 'role',
          choices: ["Manager", "Engineer", "Intern"],
          validate: (value) => { if (value) { return true } else { return "Please choose an option to proceeed" } },
  
        },
        {
          type: "input",
          name: "name",
          message: `What is the team member's name? `,
          validate: (value) => { if (value) { return true } else { return "Please input a name to proceeed" } },
  
        },
        {
          type: 'input',
          message: `What is the team member's id?`,
          name: 'id',
          validate: (value) => { if (value) { return true } else { return "Please input an ID to proceed" } },
        },
        {
          type: 'input',
          message: "What is the team member's email?",
          name: "email",
          validate: (value) => { if (value) { return true } else { return "Please input an email to proceed" } },
  
        }
    ])
}

// ---- Function to Declare what type of additonial information needed (based of the type of team member chosen in the prompt) -----
findinfo = () => {
    
}