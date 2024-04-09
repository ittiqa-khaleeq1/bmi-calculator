#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let weightInKg = await inquirer.prompt([
    {
        name: "weight",
        type: "number",
        message: chalk.magentaBright("Enter your weight in Kg's: ")
    }
]);
let heightInMeters = await inquirer.prompt([
    {
        name: "height",
        type: "number",
        message: chalk.magentaBright("Enter your height in Meters: ")
    }
]);
const bmi = weightInKg.weight / (heightInMeters.height * heightInMeters.height);
console.log(chalk.green("Your BMI is:"), chalk.yellow(`${bmi}`));
