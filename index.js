const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')

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

            createTeam();
            
        })
}
function creatIntern(){
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
        ]).then(function(answers){
            console.log(answers);
            const {id, email, name, school}
            = answers;
            Interns.push(new Intern(id, email, name, school));
            console.log(Interns);

            createTeam();
            
        });
}


function createEngineer(){
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
        ]).then(function(answers){
            console.log(answers);
            const{id, email, name, github} = answers;
            engineers.push(new Engineer(id, email, name, github));
            console.log(engineers);
            createTeam();
        });

}

function createTeam(){
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuOption',
                message: 'Which employee will you like to add?',
                choices: ['Intern','Engineer','None']
            },
        ]).then(function(answers){
            console.log(answers);
            switch(answers.menuOption){
                case 'Intern':
                    creatIntern();
                    break;
                case 'Engineer':
                    createEngineer();
                    break;
                default:
                    return

            }
        });
    
}

createManager();