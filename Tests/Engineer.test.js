const Engineer = require ("../Lib/Enginer");

//Test for creating a github
test ("Creating a github", () => {
const testingGithb = "peter101";
const employeeSample = new Engineer("peter", 2, "petter123@gmail.com", testGithub);
expect (employeeSample.github).toBe(testGitHub);
})

//Test for returning github
test ("Testing the getGithub function will return github", () =>{
const testingGithub = "peter101";
const employeeSample = new Engineer ("peter", 2 , "petter123@gmail.com", testingGithub);
expect (employeeSample.getGithub ()). toBe(testingGithub);
})

//Testing role


