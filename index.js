// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
    //Sections: Title, Description, Table of Contents, Installation, Usage, License, Contributing, Test, Questions
    //Questions
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: (value) => { if(value){return true} else {return 'GitHub username is required.'}},
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the name of your repository?',
        name: 'reponame',
        validate: (value) => { if(value){return true} else {return 'Repo name is required.'}},
    },
    //Title 
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (value) => { if(value){return true} else {return 'Title of project is required.'}}
    },
    //Description
    {
        type: 'input',
        message: 'Describe your project',
        name: 'description',
        validate: (value) => { if(value){return true} else {return 'Description is required.'}}
    },
    //Installation
    {
        type: 'input',
        message: 'Are there any installation instructions needed for your project?',
        name: 'installation'
    },
    //License ////
    {
        type: 'checkbox',
        message: 'Choose a license for your project',
        name: 'license',
        choices: ['none', 'MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'BSD 2-clause', 'LGPLv3', 'AGPLv3', 'other']

    },
    //Usage
    {
        type: 'input',
        message: 'Include how project should be used',
        name: 'usage'
    },
    //Contributing
    {
        type: 'input',
        message: 'Provide information for how others can contribute to the project',
        name: 'contributing'
    },
    //Test
    {
        type: 'input',
        message: 'Are there any tests for your project?',
        name: 'test'
    },
])
// ).then ({
//     username,
//     email,
//     reponame,
//     title,
//     description,
//     installation,
//     license,
//     usage,
//     contributing,
//     test
// }) => {

// }
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //readmeformat goes here w/jquery ${} for fileName and data
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your Readme has been generated!")
    })

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init()
