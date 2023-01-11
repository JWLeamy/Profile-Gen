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
        const officeNumber = constructor.getOfficeNumber();
        const school = constructor.getSchool();
        const GitHub = constructor.getGithub()
        let content = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
                crossorigin="anonymous"></script>
            <link rel="stylesheet" href="style.css">
            <script src='https://kit.fontawesome.com/a076d05399.js'></script>
            <title>My Team Generator</title>
        </head>
        <body>
            <h1 class="title">My Team</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3">`;

        if (role = "Intern") {
            let infobox = `
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
        content.append(infobox);
        }
        else if (role = "Engineer") {
            let infobox = `
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
        content.append(infobox);
        }
        else if (role = "Manager") {
            let infobox = `
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
        content.append(infobox) 
        }
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

        }

    )
}

memberinfo()