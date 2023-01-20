const Intern = require("../lib/Intern")

describe('Intern Tests', () => {
    
    test("Can retrieve correct School Name", () => {
        const school = "RandomSchool";
        const test = new Intern("filler", 0, "filler", school);
        expect(test.getSchool()).toBe(school);
    })

    test("Can return the appropriate role", () => {
        const test = new Intern ("filler", 0, "filler", "filler");
        expect(test.getRole()).toBe("Intern");
    })
})