const Employee = require("../Lib/Employee");
//Test for creaitng a new employee
test ("Can create a new employee.", () =>{
const employeeSample = new Employee ();
expect (typeof(employeeSample)).toBe("object");

})

/*Test for empoloyee name */
test ("Testing the name.", () =>{
const name = "James";
const employeeSample = new Employee(name)
expect (typeof(employeeSample)).toBe("object");
})

/*Test for empoloyee id */
//const name = "James";

// Test for email
// test("Can test email through getEmail method.", () => {
//     const testEmail = "jamesljenks@gmail.com";
//     const employeeInstance = new Employee("James", 2, testEmail);
//     expect(employeeInstance.getEmail()).toBe(testEmail);
// })

//test for role
// test("Testing role.", () => {
//     const returnValue = "Employee";
//     const employeeInstance = new Employee("James", 2, "jamesljenks@gmail.com");
//     expect(employeeInstance.getRole()).toBe(returnValue);
// })
