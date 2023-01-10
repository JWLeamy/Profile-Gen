const Employee = require("./Employee");

// Extend the employee class to return neccesary Intern information (school/getSchool()/getRole())
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;