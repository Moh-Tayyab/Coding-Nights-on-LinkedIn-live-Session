//Program written by [Muhammad Tayyab]
//Date:27-03-2024

import inquirer from "inquirer";
                                      //import inquirer and chalk
import chalk from "chalk";

// total amount $300 Billion 
// $243 billion Pakistan's loans and $57 billion for our NEEDY POLITICIANS
// NOTE: Needy...! not all
let myAccountBalance: number = 300000000000; 

let accountPin: number = 1122;

let pinInput = await inquirer.prompt([
  {
    type: "input",
    name: "pin",
    message: (chalk.gray(chalk.bgGreen("Enter your 4-digit pin code:"))),
  },
]);

if (pinInput.pin == accountPin) {
  console.log(chalk.italic(chalk.cyanBright("         Welcome!!        ")));
  console.log(chalk.magenta("Login Successfully."))

  let operationAns = await inquirer.prompt([
    {
      type: "list",
      name: "operation",
      message: (chalk.bgCyanBright("Please select an operation:")),
      choices: [
        "Deposit",
        "Withdraw",
        "Check Balance",
        "Fast Cash Option",
        "Online Transaction",
        "Bill Payment",
        "Exit",
  ]
    },
  ]);

  if (operationAns.operation == "Deposit") {
    let deposited = await inquirer.prompt([
      {
        type: "input",
        name: "amount",
        message: "Enter the amount to be deposited:",
      },
    ]);
    const depositAmount = parseFloat(deposited.amount);
    myAccountBalance += depositAmount;

    console.log(`Your current balance is: ${myAccountBalance}`);
  }
  if (operationAns.operation == "Withdraw") {
    let withDraw = await inquirer.prompt([
      {
        type: "input",
        name: "amount",
        message: "Enter the amount to be withdrawn:",
      },
    ]);
    const withdrawalAmount = parseFloat(withDraw.amount);
    myAccountBalance -= withdrawalAmount;
    if (withdrawalAmount <= myAccountBalance) {
      myAccountBalance -= withdrawalAmount;
      console.log(chalk.green(`Transaction Successful. Your remaining balance is: ${myAccountBalance}`));
    } else {
      console.log(chalk.red("Insufficient funds. Unable to complete the transaction."));
    }
  
  }
  if (operationAns.operation == "Check Balance") {
    console.log(chalk.blackBright(`Current balance is: ${myAccountBalance}`));
  }
  if (operationAns.operation == "Fast Cash Option") {
    let fastCash = await inquirer.prompt([
      {
        type: "list",
        name: "amount",
        message: "Enter the amount to be fast cash:",
        choices: [
          "60000000000", // $57B for needy politician
          "100000000000", // $100B
          "150000000000", // $150B
          "200000000000", // $200B
          "300000000000", // $243B Loans
          "340000000000", // $300B 
          ] 
      },
    ]);
    myAccountBalance -= fastCash.amount;
    console.log(chalk.greenBright(`Your current balance is: ${myAccountBalance}`));
  }
  if (operationAns.operation === "Online Transaction") {
    let onlineTransaction = await inquirer.prompt([
      {
        type: "list",
        name: "paymentMethod",
        message: "Please select the option:",
        choices: [
          "State Bank of Pakistan", 
          "IMF", "Asian Development Bank", 
          "World Bank", 
          "The Bank of China"
        ],
      },
      {
        type: "number",
        name: "amount",
        message: (chalk.magenta("Enter the amount to be paid:")),
      },
    ]);

    const amount = parseFloat(onlineTransaction.amount);
    if (isNaN(amount)) {
      console.log("Invalid amount entered. Please enter a numeric value.");
    }

    switch (onlineTransaction.paymentMethod) {
      case "State Bank of Pakistan":
        myAccountBalance -= amount;
        console.log("Transaction Successful, Thank you for using State Bank of Pakistan.");
        console.log("You have successfully transfer to State Bank of Pakistan.");
        break;
      case "IMF":
        myAccountBalance -= amount;
        console.log("Transaction Successful, Thank you for using State Bank of Pakistan.");
        console.log("You have successfully transfer to IMF.");
        break;
      case "Asian Development Bank":
        myAccountBalance -= amount;
        console.log("Transaction Successful, Thank you for using State Bank of Pakistan.");
        console.log("You have successfully transfer to Asian Development Bank.");
        break;
      case "World Bank":
        myAccountBalance -= amount;
        console.log("Transaction Successful, Thank you for using State Bank of Pakistan.");
        console.log("You have successfully transfer to World Bank.");
        break;
        case "The Bank of China":
          myAccountBalance -= amount;
          console.log("Transaction Successful, Thank you for using State Bank of Pakistan.");
          console.log("You have successfully transfer to The Bank of China.");
          break;
      default:
        console.log("Invalid payment method selected.");
    }
    console.log(chalk.yellow(`Your current balance is: ${myAccountBalance}`));
  }
  if (operationAns.operation === "Bill Payment") {
    let billPayment = await inquirer.prompt([
      {
        type: "list",
        name: "paymentMethod",
        message: "Please select the option:",
        choices: [
           "Electricity",
           "Internet",
           "Gas",
           "Water",
           "Credit Card"
          ]
      },
      {
        type: "number",
        name: "amount",
        message: (chalk.magenta("Enter the amount to be paid:")),
      },

    ]);
    const amount = parseFloat(billPayment.amount);
    if (isNaN(amount)) {
      console.log("Invalid amount entered. Please enter a numeric value.");
    }
    switch (billPayment.paymentMethod) {
      case "Electricity":
        myAccountBalance -= amount;
        console.log("Transaction Successful, Thank you for using Electricity.");
        break;
      case "Internet":
        myAccountBalance -= amount;
        console.log("Transaction Successful, Thank you for using Internet.");
        break;
      case "Gas":
        myAccountBalance -= amount;
        console.log("Transaction Successful, Thank you for using Gas.");
        break;
      case "Water":
        myAccountBalance -= amount;
        console.log("Transaction Successful, Thank you for using Water.");
        break;
      case "Credit Card":
        myAccountBalance -= amount;
        console.log("Transaction Successful, Thank you for using Credit Card.");
        break;
      default:
        console.log("Invalid payment method selected.");
    }
  }


  if (operationAns.operation === "Exit") {
    console.log(chalk.greenBright("Thank you for using our services."));
  }
} else {
  console.log(chalk.red("Something went to wrong, Please try again!!"));
  console.log(chalk.bgRed("Please enter your correct pin code!"));
}
