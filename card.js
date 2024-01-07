#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:tapesh.dua420@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                       Tapesh Dua"),
    email: chalk.green("tapesh.dua420@gmail.com"),
    github: chalk.gray("https://github.com/") + chalk.green("Tapesh-1308"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("tapesh-dua-b49872216"),
    npx: chalk.red("npx") + " " + chalk.white("tapesh-dua"),

    labelEmail: chalk.white.bold("     Email:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelEmail}  ${data.email}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "Hi there! I am Tapesh, a Frontend Developer"
        )}`,
        `${chalk.italic("and DSA Problem-Solver from India, and have a")}`,
        `${chalk.italic(
            "expertise in creating beautiful, cool, and responsive"
        )}`,
        `${chalk.italic(
            "web apps. Toss me an email if you want to collab!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());