import inquirer from 'inquirer';
import chalk from 'chalk';
let simpleCalculator = await inquirer.prompt([
    {
        type: 'number',
        name: 'firstNumber',
        message: 'Enter first number'
    },
    {
        type: 'number',
        name: 'secondNumber',
        message: 'Enter second number'
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Enter operation',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
let firstNumber = simpleCalculator.firstNumber;
let secondNumber = simpleCalculator.secondNumber;
let operation = simpleCalculator.operation;
switch (operation) {
    case 'Addition':
        console.log(chalk.green(firstNumber + secondNumber));
        break;
    case 'Subtraction':
        console.log(chalk.green(firstNumber - secondNumber));
        break;
    case 'Multiplication':
        console.log(chalk.green(firstNumber * secondNumber));
        break;
    case 'Division':
        console.log(chalk.green(firstNumber / secondNumber));
        break;
    default:
        console.log(chalk.red('Invalid operation'));
}
