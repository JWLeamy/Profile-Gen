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