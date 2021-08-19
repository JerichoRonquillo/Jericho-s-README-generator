// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
    
    {
        type: "input",
        message: "Project Title",
        name: "Title",
    },
    {
        type: "input",
        message: "Describe your project",
        name: "Description",
    },
    {
        type:"input",
        message: "What was your motivation?",
        name: "motivation",
    },
    {
        type:"input",
        message: "Why did you build it?",
        name: "whyBuildIt",
    },
    {
        type:"input",
        message: "What problems did it solve?",
        name: "problemSolved",
    },
    {
        type:"input",
        message: "What did you learn?",
        name: "learn",
    },
    {
        type:"input",
        message: "What is your email?",
        name: "email",
    },
    {
        type:"input",
        message: "What is your git username?",
        name: "username",
    },



]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
