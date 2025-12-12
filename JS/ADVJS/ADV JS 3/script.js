//More topics [class expression, hoisting, inheritance, getter & seeter]
//Inheritance

// class Animal{
//     constructor(){
//         this.hands = 4;
//         this
// .legs = 4;

//     }
//     eat(){}
//     breathe(){}
// }

// class kekta extends Animal{
//     constructor(){
//         super();
//         this.legs = 2;
//         this.hands = 2;

//     }
//     susu(){}
//     khana(){}
// }




//Question
//Create a user object that stores name and email and has a login method which prints "User logged in".
// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     login(){
//         console.log("User logged in");
//     }
// }

// let user1 = new User("Mohit", "mohit@gmail.com");
// user1.login();
// let user2 = new User("Ankit", "Ankit@gmail.com");
// user2.login();
// let user3 = new User("Rohit", "Rohit@gmail.com");
// user3.login();

//create a product object that stores name and price and has a methos which returns the final price after discounts.
// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     finalPrice(discount){
//         return this.price - (this.price * discount / 100);
//     }
// }
// let product1 = new Product("Laptop", 50000);
// console.log(product1.finalPrice(10));
// let product2 = new Product("Phone", 20000);
// console.log(product2.finalPrice(5));
// let product3 = new Product("Tablet", 15000);
// console.log(product3.finalPrice(15));


//create a student class whose constructor accepts name and roll number.
//And a method introduce that prints both values.
//Inside the constructor, set values using this.
//then try removing this and notice what error occurs and why?
//Create an object with two methods.
//One method using a normal function.
//One method using an arrow function.
//Inside both, print this and observe the difference.
//the goal is to clearly understand how this works and when it refers to the object and when it refers to the global object.
// let obj = {
//     normalFunction: function(){
//         console.log(this);
//     },
//     arrowFunction: () => {
//         console.log(this);
//     }
// }

// obj.normalFunction(); // refers to obj
// obj.arrowFunction(); // refers to global object


// 1️⃣ Create a Student class
class Student {
  constructor(name, roll) {
    this.name = name;  // 'this' refers to current object
    this.roll = roll;
  }

  introduce() {
    console.log(`My name is ${this.name} and my roll number is ${this.roll}`);
  }
}

// Creating an object
const student1 = new Student("Mohit", 101);
student1.introduce();



// 2️⃣ Create an object with two methods
const obj = {
  name: "Test Object",

  normalFunction: function () {
    console.log("Normal Function -> this refers to:", this);
  },

  arrowFunction: () => {
    console.log("Arrow Function -> this refers to:", this);
  }
};

obj.normalFunction();
obj.arrowFunction();
