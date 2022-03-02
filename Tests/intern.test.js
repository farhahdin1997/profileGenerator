const Intern = require("../lib/Intern");

//Test for create school

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("James", 2, "jamesljenks@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

//Testo for returning office number
test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("James", 2, "jamesljenks@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

//Testing role
test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("James", 2, "jamesljenks@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});