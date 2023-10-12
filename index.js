

for (var i = 0 ; i < document.querySelectorAll(".drum").length ; i++ ){     
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}


function handleClick(){
    var clickedButton = this.innerHTML;
    sound(clickedButton);
    buttonAnimation(clickedButton);
}
document.addEventListener("keypress",function(){
    sound(event.key);
    buttonAnimation(event.key);
})

function sound(keyPressed) {

    switch (keyPressed) {
        case "w":
            var tomOne = new Audio("sounds/tom-1.mp3");
            tomOne.play();            
            break;

        case "a":
            var tomTwo = new Audio("sounds/tom-2.mp3");
            tomTwo.play();
            break;

        case "s":
            var tomThree = new Audio("sounds/tom-3.mp3");
            tomThree.play();
            break;

        case "d":
            var tomFour = new Audio("sounds/tom-4.mp3");
            tomFour.play();
            break;

        case "j":
                
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;

        case "l":    
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
        default:
            console.log(event);
    } 
    
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout( function () {
        activeButton.classList.remove("pressed");    
    },100);

}

$("h1").css("color","ivorywhite");
