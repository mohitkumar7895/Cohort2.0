//Introduction to Asynchrony in JavaScript
//Introduction to Callbacks and Problems in Callbacks
//Understanding Promisees - pending , resolved , rejected
//How to prevent callback hell using async & await


//js- jo language hai single threaded 
//ek kaam ek bar mai kr payngii - synchronous Approach 
//Asynchronous Approach - multiple kaam ek bar mai kr payngii

//callbacks - function ko as a parameter pass krna
//ek function hota hai jo turanrt nhi chalega jab aapka koi kaam complete honga tab yai function chaltaa hai 

// function abcd(fn){
//    fn();
// }

// abcd(function(){
//     console.log("Hello World");            //Hello World
// });

// function abcd(fn){        //wrong approach - callback hell
//   fn(function(fn3()){
//     fn3();
//   });   

// abcd(function(){
//     fn2(function(){

//     });
// });

//callback
//situation-- github se repo lana hai
