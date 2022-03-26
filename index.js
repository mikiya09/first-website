


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

    case "Luv(sic) p2":
      var aruarian = new Audio("music/Nujabes - Luv_sic part 2 (feat.Shing02).mp3");
      aruarian.play();
      break;

    default: console.log(key);

  }
}



function buttonAnimation(currentKey) {

  var activation = document.querySelector("." + currentKey);

  activation.classList.add("pressed");

  setTimeout(function() {
    activation.classList.remove("pressed");
  }, 100);

}
