const Engineer = require("../lib/Engineer")

describe('Engineer Tests', () => {
    
    test("Can retrieve Github", () => {
        const git = "Mygitname";
        const test = new Engineer("filler", 0, "filler", git);
        expect(test.getGithub()).toBe(git);
    })

    test("Can return the appropriate role", () => {
        const test = new Engineer ("filler", 0, "filler", "filler");
        expect(test.getRole()).toBe("Engineer");
    })
})