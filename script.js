var introMessage = ["Hi, I am Rahman."]
var textPosition = 0;
var speed = 120;

function typewriter(){
    document.querySelector("#intro").innerHTML = introMessage[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != introMessage[0].length){
        setTimeout(typewriter, speed);
    }

}

window.addEventListener("load", typewriter);
