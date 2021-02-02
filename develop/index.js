// TODO: Include packages needed for this application
let fs = require('fs');
let inquirer = require('inquirer');
const { resolve } = require('path');
let markDown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Name of your Project:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Description of your Project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Usage Information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines:',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Test Instructions:',
        name: 'instructions',
    },
    {
        type: 'list',
        choices:[
            'None',
            'CC0 1.0 Universal',
            'GNU LGPL v3',
            'MIT',
            'Apache License, Version 2.0',
            'Boost'
        ],
        message: 'Are you specifying a license?',
        name: 'license' 
      },
      {
        type: 'input',
        message: 'gitHub Username',
        name: 'gitHub',
       },
      {
        type: 'input',
        message: 'eMail Adress',
        name: 'email',
      },
];

// TODO: Create a function to write README file
 function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 
        (err)=>
            err? console.log(err): console.log('Success!'))

}


// TODO: Create a function to initialize app
function init() {
inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        const uniqueName = `README_${response.name.toLowerCase().split(' ').join('')}.md`;
        writeToFile(uniqueName, markDown(response))
        

    })

}

// Function call to initialize app
init();

