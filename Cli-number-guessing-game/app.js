import inquirer from "inquirer";
import chalk from "chalk";
let anyNumb = Math.floor(Math.random() * 6 + 1);
let game = await inquirer.prompt([
    {
        name: "guessingNum",
        type: "number",
        message: "Guess a number between 1-6:",
    },
]);
if (game.guessingNum === anyNumb) {
    console.log(chalk.green("Congratulation You guess a right number"));
}
else {
    console.log(chalk.redBright("Sorry, you guess a wrong number."));
}
