# Profile-Gen
A Node.js command line application that creates a personalized Webpage using information about a given company's employees.


[Untitled_ Jan 16, 2023 3_46 PM.webm](https://user-images.githubusercontent.com/111401066/212783713-a4ddedc9-4f16-480a-b9f5-91f8799ab1b3.webm)

![Index.html file created](./src/Profile%20Gen.png)


## User Acceptance Critera
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Techgnologies Used
Javascript, HTML, CSS
Node.js, Jest

## Code Snippet
Primary index.js -
```
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
    .then((answers) => {
        //adds info to the index.html file
        addedinfo(answers);
    })
}

```
Testing -
```
const Employee = require("../lib/Employee")

describe('Employee Data', () => {
    
    test("Can retrieve name", () => {
        const name = "John";
        const test = new Employee(name);
        expect(test.getName()).toBe(name);
    })

    test("can retrieve ID", () => {
        const ID = 287
        const test = new Employee("filler", ID);
        expect(test.getId()).toBe(ID);
    })

    test("can retrieve Email", () => {
        const Email = "randomemail@gmail.com"
        const test = new Employee("filler", 0, Email);
        expect(test.getEmail()).toBe(Email);
    })
})
```