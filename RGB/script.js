var btn = document.querySelector('#btn');
var box = document.querySelector('#box');

btn.addEventListener('click', function(){

    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);
    //var a  = Math.random().toFixed(2); // 0.00 - 1.00

    box.style.backgroundColor = `rgba(${c1}, ${c2}, ${c3})`;

   // box.innerHTML = `rgba(${c1}, ${c2}, ${c3}, ${a})`;
});
