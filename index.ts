#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) compare user input with computer generate number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);


const answer = await inquirer.prompt([
  {
    name: "userGuessingNumber",
    type: "number",
    message: "please guess a number between 1-6: ",
  },
]);

if (answer.userGuessingNumber === randomNumber) {
  console.log("Congratulaions! you guessed right number.");
} else {
  console.log("you guessed wrong number");
}
