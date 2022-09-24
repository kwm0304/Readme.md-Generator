// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require ('../utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    //Sections: Title, Description, Table of Contents, Installation, Usage, License, Contributing, Test, Questions
    //Questions
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Username',
        validate: ''
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email'
    },
    {
        type: 'input',
        message: 'What is the name of your repository?',
        name: 'Repo-name',
        validate: ''
    },
    //Title 
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
        validate: ''
    },
    //Description
    {
        type: 'input',
        message: 'Describe your project',
        name: 'Description',
        validate: ''
    },
    //Installation
    {
        type: 'input',
        message: 'Are there any installation instructions needed for your project?',
        name: 'Installation'
    },
    //License ////
    {
        type: 'list',
        message: 'Choose a license for your project',
        name: 'license'

    },
    //Usage
    {
        type: 'input',
        message: 'Include how project should be used',
        name: 'Usage'
    },
    //Contributing
    {
        type: 'input',
        message: 'Provide information for how others can contribute to the project',
        name: 'usage'
    },
    //Test
    {
        type: 'input',
        message: 'Are there any tests for your project?',
        name: 'Test'
    },


    

   
];
// What is the title of your project?
// Write a short description of your project

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //readmeformat goes here w/jquery ${} for fileName and data
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();