const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");

function initialPrompt ()
{
    const answers = inquirer.prompt([
        {
            message: "Hello, Welcome to the team generator app",
            name: "hello"
        },
        {
            message: "Please answer the following prompts in order to build your team",
            name: "hello"
        },
        {
            message: "What is your Manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Manager's id number?",
            name: "id"
        },
        {
            message: "What is your Manager's email?",
            name: "email"
        }, {
            message: "What is your Manager's office number ?",
            name: "officeNumber"
        },
    ]);
    return answers;
}
function employeePrompt ()
{
    const answers = inquirer.prompt([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "role",
            choices: ["Engineer", "Intern"]
        },
        {
            message: "What is the name of your employee",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee's id number?",
            name: "id"
        },
        {
            message: "What is your employee's email?",
            name: "email"
        },
        {
            message: "What is the Github Username of your Engineer?",
            name: "GithubUser",
            when: (answers) =>
            {
                if (answers.role === "Engineer") {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            message: "What is your Intern's school?",
            name: "school",
            when: (answers) =>
            {
                if (answers.role === "Intern") {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: "confirm",
            message: "Do you want to add another employee?",
            name: "addEmployee"
        }
    ]);
    return answers;
}
async function myTeam(){
    let teamArray = [];
    const managerInfo = await initialPrompt();
    const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
    teamArray.push(manager);

    while (true) {
        const employeeInfo = await employeePrompt();
        if (employeeInfo.role === "Engineer"){
            const engineer = new Engineer (employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.GithubUser);
            teamArray.push(engineer);
        }
        if (employeeInfo.role === "Intern"){
            const intern = new Intern (employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.school);
            teamArray.push(intern);
        }
        if (employeeInfo.addEmployee === false) {
            break;
        }
    }
    return teamArray;
}

module.exports.myTeam = myTeam;
module.exports.employeePrompt = employeePrompt;
module.exports.initialPrompt = initialPrompt;