var message = ["hello, I am Rahman.\ni love potatoes.\ni also love machine learning."]

var textPosition = 0;
var speed = 60;

const nav = document.getElementById('info')
nav.style.display = "none"

const intro = document.getElementById("intro")

typewriter = () => {
  intro.innerHTML = message[0].substring(0, textPosition) + 
  "<span class='blinker' id='blinker'></span>";
  if(textPosition++ != message[0].length){
    setTimeout(typewriter, speed);
  }
}

intro.addEventListener('animationend', function () {
  nav.style.display = "block"
  document.getElementById('blinker').style.animationIterationCount = "infinite";
})


window.addEventListener("load", typewriter);