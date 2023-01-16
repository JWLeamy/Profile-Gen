const Employee = require("../lib/Employee")

test('Employee has a name', () => {
    expect(Employee.name).toBe(Employee.getName())
})