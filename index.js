// Install packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// Require neccesary (local) paths for future use
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const { listenerCount } = require('process');


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

// ---- The first half of this function identifies what type of additonial information is needed (based of the type of team member chosen in the prompt) -----
// ---- The second half of this function takes all the information gathered and applies it to an HTML layout (which will later be added to the final html file)-----
findinfo = ({role, name, id, email}) => {
    let neededinfo = '';
    if (role === "Intern") {
        neededinfo = "Where did your Intern go to school?"
    } else if (role === "Engineer") {
        neededinfo = "What is your Engineer's GitHub username?"
    } else if (role === "Manager") {
        neededinfo = "What is your Engineer's office number?"
    }
    inquirer.prompt([{
        message: `${neededinfo}`,
        name: 'needinfo',
    }, {
        type: 'list',
        message: 'Would you like to add an additional team member?',
        choices: ["Yes", "No"],
        name: 'addmember'
    }])
    .then( 
        function({neededinfo, addmember}) {
            let memberinformation = '';
            
        }

    )
}
