// TODO: Include packages needed for this application
let fs = require('fs');
let inquirer = require('inquirer');
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
        const uniqueName = `${response.name.toLowerCase().split(' ').join('')}_README.md`;
        writeToFile(uniqueName, markDown(response))
        

    })

}

// Function call to initialize app
init();
