

// event-oriented & object-oriented
// detecting button press
var n = document.querySelectorAll(".drum").length;

for (var i=0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}


// detecting keyboard press
document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


// 月亮代表我的心
document.querySelector(".leslie").addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

});


function makeSound(key) {

    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      case "leslie":
        var song = new Audio("sounds/月亮代表我的心-张国荣.mp3");
        song.play();
        // disable click after this button has been click
        // the problem is that it will be able to click until refresh the page
        document.getElementById("e").disabled = true;
        break;


      default: console.log(buttonInnerHTMl);    // you don't have to write this here, it's like "else"

    }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}




