// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'Enter Title of your project?',
    'Description of the project',
    'How to install the project?',
    'Usage of the project?',
    'List collaborators:',
    'Which license does your project use?',
    'How can users contribute to your project?',
    'What is your GitHub username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./utils/README.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'credits',
                message: questions[4]
            },
            {
                type: 'list',
                name: 'license',
                message: questions[5],
                choices: [
                    'Apache 2.0 License',
                    'Boost Software License 1.0',
                    'BSD 3-Clause License',
                    'BSD 2-Clause License'],
                default: 'No License'
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[6]
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8]
            }
        ])
        .then((answers) => {
            writeToFile(answers);
        });
}

// Function call to initialize app
init();