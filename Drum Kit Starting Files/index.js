alert("Use this website to play drums!!");

const buttons = document.querySelectorAll("button");

function switchCase(input){
    var audio;
    switch(input){
        case "w": audio=new Audio("sounds/crash.mp3");
        break;
        case "a": audio=new Audio("sounds/kick-bass.mp3");
        break;
        case "s": audio=new Audio("sounds/snare.mp3");
        break;
        case "d": audio=new Audio("sounds/tom-1.mp3");
        break;
        case "j": audio=new Audio("sounds/tom-2.mp3");
        break;
        case "k": audio=new Audio("sounds/tom-3.mp3");
        break;
        case "l": audio=new Audio("sounds/tom-4.mp3");
        break;
    }
    audio.play();
}

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        var element=button.innerHTML;
        switchCase(element);
    }
    );
});

window.addEventListener("keydown",(event)=>switchCase(event.key));
