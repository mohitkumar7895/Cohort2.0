// let prompt = require("prompt-sync")();
// let age = Number(prompt("Enter your age: "));

// if (age >= 18) {
//     console.log("Valid Vote");
// } else   {
//     console.log("Child");
// }

// let prompt = require("prompt-sync")();
// let marks = Number(prompt("Enter your marks: "));

// if (marks >= 90) {
//     console.log("A+ Grade");
// } else if (marks >= 80) {
//     console.log("A Grade");
// } else if (marks >= 70) {
//     console.log("B+ Grade");
// } else if (marks >= 60) {
//     console.log("B Grade");
// } else if (marks >= 50) {
//     console.log("C Grade");
// } else {
//     console.log("Fail");
// }

// let prompt = require("prompt-sync")();
// let number = Number(prompt("Enter a number: "));

// if (number > 0) {
//     console.log("Positive Number");
// } else if (number < 0) {
//     console.log("Negative Number");
// }
// else {
//     console.log("Zero");
// }

//Q-1 Accept two numbers and print the greatest between them
// let prompt = require("prompt-sync")();
// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// if (num1 > num2) {
//     console.log(`${num1} is the greatest number`);
// }
// else if (num2 > num1) {
//     console.log(`${num2} is the greatest number`);
// }
// else {
//     console.log("Both numbers are equal");
// }

//Q-2 Accept an integer and check whether it is even number or odd.
// let prompt = require("prompt-sync")();
// let number = Number(prompt("Enter a number: "));

// if (number % 2 == 0) {
//     console.log(`${number} is an Even number`);
// }
// else {
//     console.log(`${number} is an Odd number`);
// }

//Q-3 Accept three numbers and print the greatest among them
// let prompt = require("prompt-sync")();
// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// let num3 = Number(prompt("Enter third number: "));
// if (num1 >= num2 && num1 >= num3) {
//     console.log(`${num1} is the greatest number`);
// }
// else if (num2 >= num1 && num2 >= num3) {
//     console.log(`${num2} is the greatest number`);
// }
// else {
//     console.log(`${num3} is the greatest number`);
// }

//Q-4 Accept a years and check if it a leap year or not(ggogle to find out whats a leap year)
// let prompt = require("prompt-sync")();
// let year = Number(prompt("Enter a year: "));

// if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
//     console.log(`${year} is a Leap Year`);
// }
// else {
//     console.log(`${year} is not a Leap Year`);
// }

//Q-5 Shop discount - Description on Graphic
// let prompt = require("prompt-sync")();
// let amount = Number(prompt("Enter the total amount: Rs. "));
// let discount = 0;
// if (amount > 1000) {
//     discount = amount * 0.10;
// }
// let finalAmount = amount - discount;
// console.log(`Discount applied: Rs. ${discount}`);
// console.log(`Final amount to be paid: Rs. ${finalAmount}`);

//Q-6 Calculate electricity bill according to the given conditions
// For first 100 units Rs. 1.5/unit
// For next 100 units Rs. 2.5/unit
// For next 100 units Rs. 4/unit
// For unit above 300 Rs. 6/unit
// let prompt = require("prompt-sync")();
// let unit = Number(prompt("Enter the number of units consumed: "));
// let amount = 0;

// if (unit <= 100) {
//     amount = unit * 1.5;
// }
// else if (unit <= 200) {
//     amount = (100 * 1.5) + ((unit - 100) * 2.5);
// }
// else if (unit <= 300) {
//     amount = (100 * 1.5) + (100 * 2.5) + ((unit - 200) * 4);
// }
// else {
//     amount = (100 * 1.5) + (100 * 2.5) + (100 * 4) + ((unit - 300) * 6);
// }
// console.log(`Total electricity bill is: ₹${amount}`);

//Q-7 Counting number of days in a given month of a year
let prompt = require("prompt-sync")();
let month = Number(prompt("Enter month number (1-12): "));

let year = Number(prompt("Enter year: "));
let days;
switch (month) {
  case 1:
  case 3:

  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;

    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      days = 29;
    } else {
      days = 28;
    }

    break;

  default:
    console.log("Invalid month number");
    days = 0;
    break;
}
if (days != 0) {
  console.log(`Number of days in month ${month} of year ${year} is: ${days}`);
}
