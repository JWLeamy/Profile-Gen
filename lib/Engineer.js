const Employee = require("./Employee");

// Extend the employee class to return neccesary Engineer information (github/getgithub()/getRole())
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;