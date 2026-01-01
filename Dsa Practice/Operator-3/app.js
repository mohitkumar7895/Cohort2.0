//---Operator and their Question

//Operator Type
//Arithmetic Operators: +, -, *, /, %, ++, --
//Assignment Operators: =, +=, -=, *=, /=, %=
//Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
//Logical Operators: &&, ||, !
//Bitwise Operators: &, |, ^, ~, <<, >>
//Ternary Operator: condition ? expr1 : expr2

//Example Questions
//Q.1- Perform arithmetic operations
let a = 10;
let b = 3;
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));
console.log("Increment a: " + (++a));
console.log("Decrement b: " + (--b));

//Q.2- Comparison --- true ya false and logical operations
let x1 = 7;
let y1 = 10;
console.log("Is x1 equal to y1? " + (x1 == y1));
console.log("Is x1 not equal to y1? " + (x1 != y1));
console.log("Is x1 greater than y1? " + (x1 > y1));
console.log("Is x1 less than or equal to y1? " + (x1 <= y1));
console.log("Logical AND: " + (x1 < 10 && y1 > 5));
console.log("Logical OR: " + (x1 > 10 || y1 > 5));
console.log("Logical NOT: " + !(x1 < y1));

//Q.3- Ternary Operator
let age = 20;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);

//Q.4- Bitwise Operations
let num1 = 5;  // Binary: 0101
let num2 = 3;  // Binary: 0011
console.log("Bitwise AND: " + (num1 & num2)); // 1 (0001)
console.log("Bitwise OR: " + (num1 | num2));
console.log("Bitwise XOR: " + (num1 ^ num2)); // 6 (0110)
console.log("Bitwise NOT of num1: " + (~num1)); // -6 (inverts bits)
console.log("Left Shift num1 by 1: " + (num1 << 1)); // 10 (1010)
console.log("Right Shift num1 by 1: " + (num1 >> 1)); // 2 (0010)

//Q.5- Assignment Operators
let val = 10;
console.log("Initial value: " + val);
val += 5;
console.log("After += 5: " + val);
val -= 3;
console.log("After -= 3: " + val);
val *= 2;
console.log("After *= 2: " + val);
val /= 4;   
console.log("After /= 4: " + val);
val %= 3;
console.log("After %= 3: " + val);

