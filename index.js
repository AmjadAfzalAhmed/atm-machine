#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // dollars
let pinCode = 51214;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter you pin",
        type: "number"
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log("Correct pin code!!!");
    let account = await inquirer.prompt([
        {
            name: "accountType",
            message: "Please select account type",
            type: "list",
            choices: ["current", "savings"]
        }
    ]);
    if (account.accountType === "current") {
        console.log("Your provided info is correct. You may continue with your transaction.");
    }
    else if (account.accountType === "savings") {
        console.log("You may continue with your transaction.");
    }
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "online transfer"]
        }
    ]);
    if (operationAnswer.operation === "withdraw") {
        let withDrawAmt = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Please enter the amount you want to withdraw",
                type: "input",
            }
        ]);
        let withDrawnAmt = parseInt(withDrawAmt.withdraw);
        console.log(`After withdrawing an amount of $ ${withDrawnAmt}, your current balance is $ ${myBalance - withDrawnAmt}`);
        console.log('\n', "Transaction successful, Thank You for using ATM");
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your balance is $ ${myBalance}`);
    }
    else if (operationAnswer.operation === "online transfer") {
        let otherAccount = await inquirer.prompt([
            {
                name: "transfer",
                message: "Enter the account number:",
                type: "input"
            }
        ]);
        let userAccount = parseInt(otherAccount.transfer);
        console.log(`You have successfully made online transfer to your given account ${userAccount}.`);
        console.log("Thank You for using ATM");
    }
    else {
        console.log("You entered incorrect pin number!");
    }
}
;
