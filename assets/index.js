const fs = require("fs");
const path = require('path');
const inquirer = require ("inquirer");
const generateMarkdown = require("../utils/generateMarkdown");
const prompt = inquirer.createPromptModule

// array of questions for user
const questions = [
    "What is the name of your project?",
    "What was your motivation?", 
    "Why did you build this project?", 
    "What problem does it solve?",
    "What did you learn?",
    "What are the steps required to install your project?",
    "Provide instructions and examples for use.",
    "List your collaborators, if any, with links to their GitHub profiles.",
    "What is the license you are using?",
    "What tests have you done?",
    "what is your Github username",
    "what is your email address",
];

inquirer
  .prompt([
    {
        type: "input",
        message: "What is the name of your project?",
        name: "nameProject"
    }
  ]);
  then((Response) => {
   Response.nameProject === " "
   ? console.log(questions[0])
   : console.log("thank you")  
  });
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
