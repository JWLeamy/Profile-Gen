const Manager = require("../lib/Manager")

describe('Manager Tests', () => {
    
    test("Can retrieve Office Number", () => {
        const number = "999-995-9950";
        const test = new Manager("filler", 0, "filler", number);
        expect(test.getOfficeNumber()).toBe(number);
    })

    test("Can return the appropriate role", () => {
        const test = new Manager("filler", 0, "filler", "filler");
        expect(test.getRole()).toBe("Manager");
    })
})