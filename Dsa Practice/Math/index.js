// Q-1 : Write a program to calculate compound interest.
// CP= P(1 + r/100)^t - P
//  input => P= principal amount, r= rate of interest, t= time in years


// let prompt = require("prompt-sync")();

// let p = prompt("Enter the principal amount: ");

// let r = prompt("Enter the rate of interest: ");

// let t = prompt("Enter the time in years: ");

// console.log((p* Math.pow((1 + r/100), t)-p).toFixed(2));


// Q-2 Generate OTP
// function generateOTP() {
//     let otp = '';
//     for (let i = 0; i < 6; i++) {
//         otp += Math.floor(Math.random() * 10);
//     }
//     return otp;
// }
// console.log("Your OTP is: " + generateOTP());

//second Method
console.log(Math.floor(100000 + Math.random() * 900000));
console.log(Math.floor(1000 + Math.random() * 9000));