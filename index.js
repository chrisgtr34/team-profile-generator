const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');

const managers = [];
const engineers = [];
const interns = [];

function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Manager?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the Manager?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is email of the Manager?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of the Manager?'
            },
        ]).then(function (answers) {
            console.log(answers);
            const { id, email, name, officeNumber }
                = answers;
            managers.push(new Manager(id, email, name, officeNumber));
            console.log(managers);

            createTeam();

        })
}
function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Intern?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the Intern?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is email of the Intern?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the school name of the Intern?'
            },
        ]).then(function (answers) {
            console.log(answers);
            const { id, email, name, school }
                = answers;
                interns.push(new Intern(id, email, name, school));
            console.log(interns);

            createTeam();

        });
}


function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Engineer?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the Engineer?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the Engineer?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the github username of the Engineer?'
            },
        ]).then(function (answers) {
            console.log(answers);
            const { id, email, name, github } = answers;
            engineers.push(new Engineer(id, email, name, github));
            console.log(engineers);
            createTeam();
        });

}

function createTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuOption',
                message: 'Which employee will you like to add?',
                choices: ['Intern', 'Engineer', 'None']
            },
        ]).then(function (answers) {
            console.log(answers);

            switch (answers.menuOption) {
                case 'Intern':
                    createIntern();
                    break;
                case 'Engineer':
                    createEngineer();
                    break;
                default:
                    fs.writeFileSync('./dist/team.html', generateHTML({ managers, engineers, interns }));

                    return;

            }
        });

}

createManager();