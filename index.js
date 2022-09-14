const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

const managers = [];
const engineers = [];
const Interns    = [];

function createManager(){
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
        ]).then(function(answers){
            console.log(answers);
            const {id, email, name, officeNumber}
            = answers;

            managers.push(new Manager(id, email, name, officeNumber));
            console.log(managers);
        })
}

function

createManager();