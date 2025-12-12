//cb - ek funnrtion hota hai
// jab kaam ho jaaye tab chalta hai

// function afterDelay(time, cb) {
//   setTimeout(() => {
//     cb();
//   }, time);
// }
// afterDelay(2000, () => {
//     console.log("2 seconds ho gaye");   
// });



function getUser(username, cb) {
    setTimeout(() => {
        cb({id: 1, username: username});
    }, 2000);
}

function getUserPosts(userId, cb) {
    setTimeout(() => {
        cb(["post1", "post2", "post3"]);
    }
    , 2000);
}

getUser("harsh", function(data){
    getUserPosts(data.id, function(posts){
        console.log(posts);
    });
})