//promises
// async await
//settimeout and setinterval with promises


//promise- ek kaam jake karo
//pending
//resolved
//rejected

//facebook - meara data laike ao 

// new Promise ((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("Mera Data");
//     },2000);    
// });

// Promise
// .then(function(){
//     console.log('resolved');
// })
// .catch(function(){
//     console.log('rejected');
// });


//meta pe jana async1234 --- user nhi hai to data nhi aayngaa  to resolve or reject likh sakte hai

// let prm = new Promise ((resolve , reject)=>{
//     //logic to go to meta and get data 
//     // if data aaya == resolve
//     //else reject
// });

// prm.then(function(){
//     console.log('data aagaya');
// })
// .catch(function(){
//     console.log('data nahi aaya');
// }); 


// fetch api se data lana
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log('error aagaya', err));


//async await
// promise pai kaam karta hai Async Await 
//await sirf promise ke aange lagta hai


// new Promise ((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("Mera Data");
//     },2000);
// });

// example fetch api with async await
// async function abcd(){
//     let raw = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await raw.json();
//     console.log(data);
// }
// abcd();

//example 2
// function getNum(){
//     return  new promise ((resolve , reject)=>{
//     setTimeout(()=>{
//     let num = Math.floor(Math.random()*10);
//     if (num < 5){
//         resolve('chota number hai');
//     }
//     else{
//         reject('bada number hai');
//     }
//     },2000);
// });
// }

// async function abcd(){
//    let v= await getNum()
//    console.log(v);
// }

// abcd();

