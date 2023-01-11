// Install packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// Require neccesary (local) paths for future use
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const { listenerCount } = require('process');


// ---- Primary Function that prompts users with questions to obtain team member information -----
function memberinfo() {
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
    .then((answers) => {addedinfo(answers)})
}

// ---- After retrieving all neccesary information through memberinfo() and addedinfo(), we use this function (inserthtml) to add the data to an html format in a newly created file -----
const inserthtml = (constructor) => {
    return new Promise(function () {
        const name = constructor.getName();
        const role = constructor.getRole();
        const id = constructor.getId();
        const email = constructor.getEmail();

        let content = ``;

        if (role === "Intern") {
            const school = constructor.getSchool();
            content = `
            <div class="col mb-4">
                <div class="card h-100">   
                    <header>
                        <h3 id="name">${name}</h3><i class="fa fa-coffee"></i>
                        <h3 id="position">${role}</h3>
                    </header>    
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">School: ${school}</li>              
                    </ul>
                </div>
            </div>`;
        }
        else if (role === "Engineer") {
            const GitHub = constructor.getGithub();
            content = `
            <div class="col mb-4">
                <div class="card h-100">
                    <header>
                        <h3 id="name">${name}</h3><i class="fa fa-coffee"></i>
                        <h3 id="position">${role}</h3>
                    </header>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">GitHub: ${GitHub}</li>         
                    </ul>
                </div>
            </div>`;
        }
        else if (role === "Manager") {
            const officeNumber = constructor.getOfficeNumber();
            content = `
            <div class="col mb-4">
                <div class="card h-100">
                    <header>
                        <h3 id="name">${name}</h3><i class="fa fa-coffee"></i>
                        <h3 id="position">${role}</h3>
                    </header>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">Office number:  ${officeNumber}</li>
                    </ul>
                </div>
            </div>`;
        }
        fs.appendFileSync("./dist/index.html", content)
    }
    )    
}
// ---- The first half of this function identifies what type of additonial information is needed (based of the type of team member chosen in the prompt) -----
// ---- The second half of this function takes all the information gathered and applies it to an HTML layout (which will later be added to the final html file)-----
// ---- (Sidenote: both the addedinfo() and memberinfo() coincide with one another) -----
const addedinfo = ({role, name, id, email}) => {
    let neededinfo = '';
    if (role === "Intern") {
        neededinfo = "Where did your Intern go to school?"
    } else if (role === "Engineer") {
        neededinfo = "What is your Engineer's GitHub username?"
    } else if (role === "Manager") {
        neededinfo = "What is your Manager's office number?"
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
            if (role === "Intern") {
                memberinformation = new Intern(name, id, email, neededinfo)
            }
            else if (role === "Engineer") {
                memberinformation = new Engineer(name, id, email, neededinfo)
            }
            else if (role === "Manager") {
                memberinformation = new Manager(name, id, email, neededinfo)
            }
            else {
                console.log('shit')
            }
            if (addmember === "Yes") {
                memberinfo()
            }

            inserthtml(memberinformation);

        }

    )

}

memberinfo()