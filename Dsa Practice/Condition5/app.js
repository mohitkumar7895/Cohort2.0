// let prompt = require("prompt-sync")();
// let age = Number(prompt("Enter your age: "));

// if (age >= 18) {
//     console.log("Valid Vote");
// } else   {
//     console.log("Child");
// }


let prompt = require("prompt-sync")();
let marks = Number(prompt("Enter your marks: "));

if (marks >= 90) {
    console.log("A+ Grade");
} else if (marks >= 80) {
    console.log("A Grade");
} else if (marks >= 70) {
    console.log("B+ Grade");
} else if (marks >= 60) {
    console.log("B Grade");
} else if (marks >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}



