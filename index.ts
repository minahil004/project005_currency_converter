#! /usr/bin/env node

import inquirer from "inquirer";
const currency: any = {
    USD : 1,
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR: 277
};
let currencyAns = await inquirer.prompt([
    {
    name : "from",
    message: "enter currency you want to convert",
    type : "list",
    choices : ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name : "to",
        message: "Which currency you want to convert inTo",
        type : "list",
        choices : ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
    
        name : "amount",
        message: "enter amount",
        type : "number"
   
    }
])
let fromAmount = currency[currencyAns.from]
let toAmount = currency[currencyAns.to]
let usrAmount = currencyAns.amount
let baseAmount = usrAmount / fromAmount //              15000 /280
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);

/*console.log(fromAmount);
console.log(toAmount);
console.log(usrAmount);*/