
class Engineer {
    constructor (name, id, github,email){
        super (name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer";
    }

}

module.exports = Employee;