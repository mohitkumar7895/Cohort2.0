//Q-1 Sum of Digits of a Number
function sumOfDigits(n) {
  let sum = 0;

  while (n > 0) {
    let digit = n % 10;  
    sum += digit;        
    n = Math.floor(n / 10); 
  }

  return sum;
}

// Example:
console.log(sumOfDigits(12345));  // Output: 15





//Q-2 Check if the number is Automorphic Number 
function isAutomorphic(n) {
  let square = n * n;

  // Convert both to strings and check ending
  if (square.toString().endsWith(n.toString())) {
    return "Yes";
  } else {
    return "No";
  }
}

// Example
console.log(isAutomorphic(25)); // Yes
console.log(isAutomorphic(7));  // No


//Print numbers from 1 to n
let i = 1;
let n = 10;

while (i <= n) {
  console.log(i);
  i++;
}


//Print even numbers from 1 to n
let i = 1;

while (i <= 20) {
  if (i % 2 === 0) console.log(i);
  i++;
}

//Print odd numbers from 1 to n
let i = 1;

while (i <= 20) {
  if (i % 2 !== 0) console.log(i);
  i++;
}


//Sum of first n natural numbers
let n = 10;
let sum = 0;
let i = 1;

while (i <= n) {
  sum += i;
  i++;
}

console.log(sum);


//5️⃣ Print table of a number (5 ka table)
let i = 1;

while (i <= 10) {
  console.log(5 * i);
  i++;
}

//Check Palindrome using while loop
let n = 121;
let temp = n;
let rev = 0;

while (temp > 0) {
  rev = rev * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}

console.log(rev === n ? "Palindrome" : "Not Palindrome");

//Find factorial
let n = 5;
let fact = 1;

while (n > 0) {
  fact *= n;
  n--;
}

console.log(fact);

//Print Fibonacci up to n terms
let n1 = 0, n2 = 1, i = 1;

while (i <= 10) {
  console.log(n1);
  let next = n1 + n2;
  n1 = n2;
  n2 = next;
  i++;
}

//Largest digit in number
let n = 58439;
let max = 0;

while (n > 0) {
  let d = n % 10;
  if (d > max) max = d;
  n = Math.floor(n / 10);
}

console.log(max);


