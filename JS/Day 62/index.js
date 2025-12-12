//Introduction to Error Handling
// Common types of errors in Java script---['Syntax Error', 'Runtime Error', 'Logical Error']
// Understamding the Error Object ---['message', 'name', 'stack']
// Handling exceptions using try...catch...finally
// How to throw Errors in JavaScript
// Error Handling in Asynchronous Code 

//agar 500 line ka code hai to 30 line khrab thi to koi bhe line nhi chalegii
//error ko handel karna seekhna hai
//Error handling- Problem ko shi tarike sai handel karna hai

//Syntax Error - Aapne code mai likhte saqmay galtii kr de
//leht a=5;   ----- formate glat .  syntax galat

//Runtime Error- direct error nhi daiga chalega tab error dainga(Code likhte bkt error nhi hai chalega tab dikat hai )
// function test(){
//     let a = 5;
//     console.log(a.name); // b is not defined
// }

//logical errors-- aapke code ko kuchh karna chahiye tha par wo kar kuch or raha hai
// try{
//     let a = 5;
//     console.log(a.name); //undefined
// }catch(error){
//     console.log("Error aaya hai");
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
// }

//console.error()  -- ye bhi error ko print krta hai red sai
//console.log()  -- ye normal message ko print krta hai error white
// with uysing tray catch use 
// try{
//     let a = 5;
//     console.log(a.name); //undefined
// }catch(error){
//     console.log(error.syack);
// }



//Senario
//Weather Dashboard with error handling
//Build a small weather dashboard that fetches current weather data from any public weather API (such as OpenWeatherMap) .

//you must make the API request asynchronously using fetch with async/await syntax.

//Additionally, create and throw custom errors based on weather conditions.

//for example. If the tenperature is extremely high or extrmely low, throw   error and handel it properly in yopur code.

let url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=cdfa7576110a2dfc44b6d8aec638a074`;





//d