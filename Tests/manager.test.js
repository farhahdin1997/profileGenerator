
const Manager = require("../lib/Manager");
//Test for creating office number

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("James", 2, "jamesljenks@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

//Test for returning office number
test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("James", 2, "jamesljenks@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

//Testing role
test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("James", 2, "jamesljenks@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});