//Loops
//Print Natural Numbers from 1 to n

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // Example: prints 1 to 10

//Q-2 Print Odd Numbers from 1 to n
function printOddNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    }
}
printOddNumbers(10); // Example: prints odd numbers from 1 to 10    

//Q-3 Print Even Numbers from 1 to n
function printEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printEvenNumbers(10); // Example: prints even numbers from 1 to 10

//Q-4 Print Sum of Natural Numbers from 1 to n
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("Sum of natural numbers from 1 to " + n + " is: " + sum);
}

sumOfNaturalNumbers(10); // Example: prints sum of natural numbers from 1 to 10

//Q-5 Print Multiplication Table of a given number
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTable(5); // Example: prints multiplication table of 5

//Q-6 Print Factorial of a given number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log("Factorial of " + n + " is: " + fact);
}
factorial(5); // Example: prints factorial of 5

//Q-7 Print Fibonacci Series up to n terms
function fibonacciSeries(n) {
    let a = 0, b = 1, nextTerm;
    console.log("Fibonacci Series:");
    for (let i = 1; i <= n; i++) {
        console.log(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
}
fibonacciSeries(10); // Example: prints first 10 terms of Fibonacci series

//Q-8 Check if a number is Prime
function isPrime(num) {
    if (num <= 1) {
        console.log(num + " is not a prime number.");
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num + " is not a prime number.");
            return;
        }
    }
    console.log(num + " is a prime number.");
}
isPrime(7); // Example: checks if 7 is prime
isPrime(10); // Example: checks if 10 is prime

//Q-9 Find GCD of two numbers
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log("GCD is: " + a);
}
gcd(48, 18); // Example: finds GCD of 48 and 18

//Q-10 Find LCM of two numbers
function lcm(a, b) {
    let gcdValue;
    let x = a, y = b;
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    gcdValue = x;
    let lcmValue = (a * b) / gcdValue;
    console.log("LCM is: " + lcmValue);
}
lcm(4, 5); // Example: finds LCM of 4 and 5

//Q-11 Reverse a given number
function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    console.log("Reversed Number is: " + reversed);
}
reverseNumber(12345); // Example: reverses 12345

//Q-12 Check if a number is Palindrome
function isPalindrome(num) {
    let originalNum = num;
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (originalNum === reversed) {
        console.log(originalNum + " is a palindrome.");
    } else {
        console.log(originalNum + " is not a palindrome.");
    }
}
isPalindrome(121);
isPalindrome(123);
// Example: checks if 121 and 123 are palindromes
isPalindrome(121); // Example: checks if 121 is a palindrome
isPalindrome(123); // Example: checks if 123 is a palindrome
isPalindrome(123); // Example: checks if 123 is a palindrome



//Q-13 Print Patterns (e.g., Right Angle Triangle)
function printRightAngleTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
printRightAngleTriangle(5); // Example: prints right angle triangle of height 5

//Q-14 Sum of to N terms
function sumToN(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumToN(10)); // Output: 55

//Q-15 Factorial of a number
// n!=n×(n−1)×(n−2)×⋯×1
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5)); // Output: 120

//Q-16 Print all factors of a number
function printFactors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

printFactors(12);

//Q-17 Sum of even and odd Numbers in a range 
function sumEvenOdd(n) {
  let evenSum = 0, oddSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) evenSum += i;
    else oddSum += i;
  }

  console.log("Even Sum:", evenSum);
  console.log("Odd Sum:", oddSum);
}
 



