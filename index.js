const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

// Prompt questions for the manager
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the manager?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID of the manager?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of the manager?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the office number of the manager?",
  },
];

// Prompt questions for adding an engineer
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID of the engineer?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of the engineer?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the GitHub username of the engineer?",
  },
];

// Prompt questions for adding an intern
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the intern?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID of the intern?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of the intern?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the school of the intern?",
  },
];

// Prompt questions for the main menu
const menuQuestions = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
  },
];


