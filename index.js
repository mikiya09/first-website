


var numberOfMusicButtons = document.querySelectorAll(".music").length;

for (var i = 0; i < numberOfMusicButtons; i++) {
  document.querySelectorAll(".music")[i].addEventListener("click", function() {
    
    var buttonInnerHTML = this.innerHTML;
  
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}


function makeSound(key) {

  switch (key) {
    case "Moon":
      var moon = new Audio("music/月亮代表我的心-张国荣.mp3");
      moon.play();
      break;

    case "Wonderful":
      var world = new Audio("music/Louis Armstrong - What A Wonderful World.mp3");
      world.play();
      break;

    case "Luv(sic)":
      var aruarian = new Audio("music/Nujabes - Luv_sic (feat.Shing02).mp3");
      aruarian.play();
      break;

    default: console.log(key);

  }
}



// this is a messy function, acutally you only need the part that is inside default
// but since I want the innerHTML to be original: Luv(sic), and parentheses are invalid argument
// so write a special case for detecting Luv(sic)

function buttonAnimation(currentKey) {

  switch (currentKey) {
    case "Luv(sic)":

      var activation = document.querySelector(".Luv-sic");
      activation.classList.add("pressed");

      setTimeout(function() {
        activation.classList.remove("pressed");
      }, 100);
      break;

    default:

      var activation = document.querySelector("." + currentKey);

      activation.classList.add("pressed");

      setTimeout(function() {
        activation.classList.remove("pressed");
      }, 100);

  }

}
