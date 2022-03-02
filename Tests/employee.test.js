const Employee = require("../Lib/Employee");
//Test for creating a new employee
test ("Can create a new employee.", () =>{
const employeeSample = new Employee ();
expect (typeof(employeeSample)).toBe("object");

})

/*Test for employee name */
test ("Testing the name.", () =>{
const name = "petter";
const employeeSample = new Employee(name)
expect (typeof(employeeSample)).toBe("object");
})

/*Test for employee ID */
test("Testing ID", ()=>{
  const name = "petter";
  const employeeSample = new Employee (name);
  expect (employeeSample.name).toBe (name);
  
})

// Test for email
test("Can test email through getEmail method.", () => {
    const testEmail = "petter123@gmail.com";
    const employeeInstance = new Employee("petter", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

//Test for role
test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("peter", 2, "petter123@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})
