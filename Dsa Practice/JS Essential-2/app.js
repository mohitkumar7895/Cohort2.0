//JS Essential
//Q.1 Sum of two Integer
let a = 10;
let b = 20;
let sum = a + b;
console.log("The sum of two integer is: " + sum);


//Q.2- Relation between integer and string
//string+ string = string
let str1 = "Hello";
let str2 = "World";
let result1 = str1 + str2;
console.log(result1); // HelloWorld

//string + integer = string
let str3 = "The number is ";
let num1 = 5;
let result2 = str3 + num1;
console.log("String + Integer: " + result2); // The number is 5

//int + int = int
let num2 = 10;
let num3 = 15;
let result3 = num2 + num3;
console.log("Integer + Integer: " + result3); // 25


//Q.3- Sum and message
     //-- type coerician
let numA = 5;
let numB = 15;
let total = numA + numB;
console.log("The total sum is: " + total);  // The total sum is: 20
     //-- Greet the user
     //Example -1
let prompt = require('prompt-sync')();
let age = prompt("Enter your age: ");
console.log("You are " + age + " years old."); // You are [age] years old.

//Example -2
let userName = "Alice";
console.log("Hello, " + userName + "! Welcome to the program."); // Hello, Alice! Welcome to the program.

 
//Q-4 Accept and print the anser
let input = require('prompt-sync')();
let number1 = parseInt(input("Enter first number: "));
let number2 = parseInt(input("Enter second number: "));
let sumResult = number1 + number2;
console.log("The sum of " + number1 + " and " + number2 + " is: " + sumResult);


//Q-5 Swap two variable via 3 methods
//Method 1: Using a temporary variable
let x = 5;
let y = 10;
let tempVar = x;
x = y;
y = tempVar;
//console.log("After swapping (Method 1): x = " + x + ", y = " + y);
console.log(x)
console.log(y)
console.log(`After swapping (Method 1): x = ${x}, y = ${y}`);


//Method 2: Using arithmetic operations
let p = 15;
let q = 25;
p = p + q; // p now becomes 40
q = p - q; // q becomes 15
p = p - q; // p becomes 25
console.log("After swapping (Method 2): p = " + p + ", q = " + q);

//Method 3: Using destructuring assignment
let m = 30;
let n = 40;
[m, n] = [n, m];
console.log("After swapping (Method 3): m = " + m + ", n = " + n);







//Q-6 Difference between var, let and const
// var: Function-scoped or globally-scoped. Can be redeclared and updated.
var varVariable = "I am a var variable";
console.log(varVariable);
var varVariable = "I can be redeclared";
console.log(varVariable);
varVariable = "I can be updated";
console.log(varVariable);

// let: Block-scoped. Cannot be redeclared in the same scope but can be updated.
let letVariable = "I am a let variable";
console.log(letVariable);
// let letVariable = "I cannot be redeclared"; // This will cause an error
letVariable = "I can be updated";
console.log(letVariable);

// const: Block-scoped. Cannot be redeclared or updated. Must be initialized at the time of declaration.
const constVariable = "I am a const variable";
console.log(constVariable);
// const constVariable = "I cannot be redeclared"; // This will cause an error
// constVariable = "I cannot be updated"; // This will also cause an error

