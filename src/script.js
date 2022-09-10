var message = ["hello.\ni love potatoes.\ni also love machine learning."]

var textPosition = 0;
var speed = 180;

typewriter = () => {
  document.getElementById("demo").innerHTML = message[0].substring(0, textPosition) + 
  "<span class='blinker'></span>";
  if(textPosition++ != message[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);
