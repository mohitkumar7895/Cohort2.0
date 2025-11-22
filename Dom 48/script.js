var aud = new Audio('./31.mp3')

var h1 = document.querySelector('h1')

h1.addEventListener('click',function(dets){
    if(dets.code == 'KeyD'){
        aud.play()
    }
})


// Selecting the box element inner and outer HTML
// var box = document.querySelector("#box")

// box.addEventListener("mouseenter", function() {
//     alert("Box clicked!")
// })

// Selecting image and changing message and background color on mouse events
// var img = document.querySelector('img')
// var msg = document.querySelector('h2 span')
// var body = document.querySelector('body')

// img.addEventListener("mouseenter", function() {
//     msg.innerHTML = "Hello Mohit! Welcome to DOM 2048"
//     body.style.backgroundColor = "lightblue"
// })

// img.addEventListener("mouseleave", function() {
//     msg.innerHTML = "goodbye Mohit! See you later"
// })