//Program written by [Muhammad Tayyab]
//Date:Mar 15, 2024

import inquirer from "inquirer";
 import chalk from "chalk";

 let userInput = await inquirer.prompt(
    [
        {
            type: "number",
            name: "num1",
            message: "Please enter your first number:"
        },
        {
            type: "number",
            name: "num2",
            message: "Please enter your second number:"
        },
        {
            type: "list",
            name: "operation",
            message: "Please select an operation:",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }
    ]
 );

 // Condition Statement
 if (userInput.operation === "Addition") {
     console.log(chalk.green(userInput.num1 + userInput.num2));
 } else if (userInput.operation === "Subtraction") {
     console.log(chalk.red(userInput.num1 - userInput.num2));
     } else if (userInput.operation === "Multiplication") {
         console.log(chalk.blue(userInput.num1 * userInput.num2));
         } else if (userInput.operation === "Division") {
             console.log(chalk.yellow(userInput.num1 / userInput.num2));
             } else {
                 console.log(chalk.whiteBright("Please select valid operator."));
     }

 
