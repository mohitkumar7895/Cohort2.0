var btn = document.querySelector('#addBtn')
var main = document.querySelector('#stage')

btn.addEventListener('click', function () {
  var div = document.createElement('div')

  var x = Math.random() * 90
  var y = Math.random() * 90

  var c1 = Math.floor(Math.random() * 256)
  var c2 = Math.floor(Math.random() * 256)
  var c3 = Math.floor(Math.random() * 256)

  div.style.height = '50px'
  div.style.width = '50px'
  div.style.position = 'absolute'
  div.style.top = y + '%'
  div.style.left = x + '%'
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
  div.style.borderRadius = '10px'

  main.appendChild(div)
})
