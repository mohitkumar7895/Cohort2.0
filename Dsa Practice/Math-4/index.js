console.log(Math.abs(-7)); // 7
console.log(Math.ceil(10.2)); // 11
console.log(Math.floor(10.8)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.trunc(10.98477)); // 10
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(64)); // 8
console.log(Math.max(5, 10, 15, 2, 8)); // 15
console.log(Math.min(5, 10, 15, 2, 8)); // 2
console.log(Math.random()); // Random number between 0 and 1







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