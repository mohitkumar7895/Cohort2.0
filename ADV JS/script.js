//advance js
// Introduction to OOPS Concept in JavaScript
// Understandind classes and objects in JavaScript
// Understanding constructor and Prototypes [this keyword,call, apply, bind] , keywords 
// More Topics on OOPS in JavaScript

// OOPS- Object Oriented Programming Systems
//Jab code chota hota hai tab kuch bhe kr sakte ho bina patterns ke (bina guideline follow liy) jab code bada ho jata hai tab guideline follow mke jati hai 
//faila hua code --- object classes and functions ke roop me likhte hai ku likhte hai koi bhe hissa toot gya hai to usko shi sai jaldii shi kr sake 
// Modular, scalable, managable, reuse, easy to fix 
// Lambe chode code ko ek modular karne ka 

//object
// let name = "mohit"
// let age = 27
// let email = "h@gmail.com"
// let address = "Sati mandir"
//ek bande ki detail ek sath rakhne ke liy aapke pass hai objects

// let user1={
//     name: "mohit",
//     age:34,
// }
// let user2={
//     name: "mohit",
//     age:34,
// }

//Classes
//blueprint
// class- - saancha
//constructor------ automatic chalne vala 

// class BiscuitMaker{
//     constriuctor(){
//         this.name = "ParleG";
//         this.price = 5;
//     }
// }

// let biscuit = new BiscuitMaker();
// let biscuit1 = new BiscuitMaker();
// let biscuit2 = new BiscuitMaker();
// let biscuit3 = new BiscuitMaker();

//classes ku bnate hyai taaki hame har baar ek naya object mil jaaye
//classes object ki factory hai
//har baar new word ke sath class run kroge tp ek naya object milega 

// class AlooChaat{
//     constructor(){
//         this.price = 30;
//         this.oil = "3ml";
//         this.oilType = "sunflower";
//         this.masala = ["chat masala", "salt", "red chili powder"];
//     }

//     packAlooChaat(){
//         console.log("Aloo Chaat packed");
//     }
//     unpackAlooChaat(){
//         console.log("Aloo Chaat unpacked");
//     }
// }

// let ac1 = new AlooChaat();

class Kitaab{
    constructor(name, author, price, color){
        this.name = name;
        this.author = author;
        this.price = price;
        this.color = color;
    }
    pannaPalto(){
        console.log("panna palat diya");
    }
    bookmaarkLagao(){
        console.log("bookmark lagaa diya");
    }
}

let book1 = new Kitaab("Harry Potter", "J K Rowling", 500, "red");
let book2 = new Kitaab("The Alchemist", "Paulo Coelho", 300, "blue");
let book3 = new Kitaab("The Monk Who Sold His Ferrari", "Robin Sharma", 400, "green");
let book4 = new Kitaab("Think and Grow Rich", "Napoleon Hill", 350, "yellow");
let book5 = new Kitaab("The Power of Now", "Eckhart Tolle", 450, "purple");
let book6 = new Kitaab("The 7 Habits of Highly Effective People", "Stephen R. Covey", 600, "orange");