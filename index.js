// code which detect mouse click on the button.

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for ( var i=0; i<numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

// code to listen keybardpress.

document.addEventListener("keydown", function (event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

// function to make sound

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio ("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio ("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio ("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio ("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio ("sounds/snare.mp3");
      snare.play();
    break;

    case "k":
      var crash = new Audio ("sounds/crash.mp3");
      crash.play();
    break;

    case "l":
      var kick = new Audio ("sounds/kick-bass.mp3");
      kick.play();
    break;

    default:
    alert("Please press any one of the alphabets display on the screen.");

  }
}

function buttonAnimation (currentkey) {
  var buttonAction = document.querySelector("."+currentkey);
  buttonAction.classList.add("pressed");

  setTimeout( function() {
    buttonAction.classList.remove("pressed");
  }, 100);
}
