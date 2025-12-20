//Scope---   hai ke app apne created variables and function kaha tak use kr sakte ho
// Scope - functional scope , global scope, block scope
// function scope- function ke andar he use ho saktii hai
// global scope- poore code mai khi bhi use ho saktii hgai
// block scope- {} curly braces mein hi use ho saktii hai

// function abcd (){
//     var a= 12;
// }

// agar aapka code kisi bhye {} mai nhi hai to aapka code global hai
// {} lagi hai to block code hai
// function maio {} hai to functional scope mai he ho
// if mai karli braces hai to block scope hai okay
 // this is a story



 //Execution content--- 

 // js sabh sai pahle aapka function dekhta hai sabse pahle js bnata hai execution , ye ek process hai jo ki do diffferent phases mai chahlta hai , memory phase and doosre ka naam hai execution phase

 //Lexical  scope  -- ki aap kaha par pyhsically avaqilable ho ye taareeka depend karta haiu ki aap kya access kr paaunge

 //dynamic scope- yai follow nhi karte js mai jaha sai call kr rhey ho uspe depend krega kya value milengii





 //closure defination and how variable are preserved

 // closure  --- closure hote hai functions jo kiu kisi parrent function ke under ho or under vakla function return ho raha ho and returning function use4 karey parent function ka kpoi variable 

//  function abcd (){
//     let a= 12;
//     return function (){
//         console.log(a);
//     }
//  }
// abcd();

 //fayda nhuksaan
 //private variable
// global pollution rok sakte hai

// jab bhe closure banta hai tab ek banklinks bun j\jata hai uska name hai [[Environment]]

//use cases private counter
// function countForMe(){
//     let c=0;
//     return function(){
//         c++;
//         console.log(c);
//     }
// }

// let func= countForMe();
// func();
// func();

// let func2 = countForMe();
// func();
// func();
// func();

//Encapsulation
// function clickLimiter(){
//     let click=0;
//     return function(){
//         if (click<5){
//             click++;
//             console.log(`clicked : ${click} times`)
//         } else {
//             console.error("Limit exceded, try After some time")
//         }
//     }
// }

// let func= clickLimiter();
// func();
// func();
// func();
// func();
// func();
// func();    /// try after some tiume


//toaster 





// the this keyword
//this keyword special keyword hai, kyu ki jaise ki baaki saare keyword ki value ya unka nature same rehta hai this ki value ya nature badal jaata hai is baat sai up usey kha use kr rhey ho 

//gloobal scope
//console.log(this)// window

//function scope
function abcd (){
    console.log(this);
}
abcd();    //window

//method

