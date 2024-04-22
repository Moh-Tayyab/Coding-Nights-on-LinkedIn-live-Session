import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    JPY: 120,
    CNY: 60,
    KRW: 1300,
    THB: 700,
    MYR: 4.56,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from Currency",
        choices: [
            "USD",
            "EUR",
            "GBP",
            "INR",
            "PKR",
            "JPY",
            "CNY",
            "KRW",
            "THB",
            "MYR",
        ],
    },
    {
        name: 'to',
        type: 'list',
        message: 'Enter to Currency',
        choices: [
            'USD',
            'EUR',
            'GBP',
            'INR',
            'PKR',
            'JPY',
            'CNY',
            'KRW',
            'THB',
            'MYR',
        ],
    },
    {
        name: 'amount',
        type: 'number',
        message: 'Enter your amount'
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let result = baseAmount * toAmount;
console.log(result);
