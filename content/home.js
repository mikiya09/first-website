


// @idea
// 1. hover on text, showing content effect (hover on the resume menu, showing a preview of the my resume pdf or any kind of file types)
//    - https://www.youtube.com/watch?v=3MptqFZ7B9w
//    - https://www.youtube.com/watch?v=hm5-qMAt-FE

// 2. background picture blur ?

// 3. Thanos Snap effect

// 4. text effect







// typewriter animation
var messageArray = ["more features will be added to the website soon..."];
var textPosition = 0;
var speed = 30;

function typewriter() {
  document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";
  if (textPosition++ != messageArray[0].length) {
    setTimeout(typewriter, speed);
  }
}

window.addEventListener("load", typewriter);




// =========================== !!! ==============================
// this method is super messy, three redundent function call, bad
// the correct way should be detecting which button is being click, and write a if else statement to determine which song gets play or pause
// play and pause should be done with only one function



// using .playPauseBTN make no distinction between three different button, therefore whenever a button get click, automatically the first button with this class will react
function buttonReaction() {
  
  var activation = document.querySelector(".playPauseBTN");
  activation.classList.add("pressed");
  activation.innerHTML = "Pause";
  // activation.innerHTML = "Play";

  setTimeout(function() {
    activation.classList.remove("pressed");
  }, 50);
}


// ================ play first button ================

audioOnePlay = false;

function playOne() {
  var audio = document.getElementById("audio-1");
  var playPauseBTN = document.querySelector('.topBTN');

  if (audioOnePlay == true) {
    audio.pause();
    audioOnePlay = false;
    playPauseBTN.innerHTML = "&#9658; Play";
    // buttonReaction();
  }
  else {
    audio.play();
    audioOnePlay = true;
    playPauseBTN.innerHTML = "&#10074;&#10074; Pause";  // Unicode
    // buttonReaction();
  }
}



// ================ play second button ================

audioTwoPlay = false;

function playTwo() {
  var audio = document.getElementById("audio-2");
  var playPauseBTN = document.querySelector('.midBTN');

  if (audioTwoPlay == true) {
    audio.pause();
    audioTwoPlay = false;
    playPauseBTN.innerHTML = "&#9658; Play";
    // buttonReaction();
  }
  else {
    audio.play();
    audioTwoPlay = true;
    playPauseBTN.innerHTML = "&#10074;&#10074; Pause";  // Unicode
    // buttonReaction();
  }
}



// ================ play third button ================

audioThreePlay = false;

function playThree() {
  var audio = document.getElementById("audio-3");
  var playPauseBTN = document.querySelector('.bottomBTN');

  if (audioThreePlay == true) {
    audio.pause();
    audioThreePlay = false;
    playPauseBTN.innerHTML = "&#9658; Play";
    // buttonReaction();
  }
  else {
    audio.play();
    audioThreePlay = true;
    playPauseBTN.innerHTML = "&#10074;&#10074; Pause";  // Unicode
    // buttonReaction();
  }
}




// ================= another way of getting button click (this method could be better utilized with other functionality) ==================

// var numberOfMusicButtons = document.querySelectorAll(".music").length;
//
// for (var i = 0; i < numberOfMusicButtons; i++) {
//   document.querySelectorAll(".music")[i].addEventListener("click", function() {
//     
//     var buttonInnerHTML = this.innerHTML;
//   
//     makeSound(buttonInnerHTML);
//
//     buttonAnimation(buttonInnerHTML);
//
//   });
// }
//

// stupid way of disable button key for second pressed once it got clicked
// var playing = 1;
// function makeSound(key) {
//
//   switch (key) {
//     case "Moon":
//       var moon = new Audio("music/月亮代表我的心-张国荣.mp3");
//       switch (playing) {
//         case 1:
//           moon.play();
//           playing = 0;
//           break;
//
//         case 0:
//           delete moon;
//           break;
//       }
//
//     case "Wonderful":
//       var world = new Audio("music/Louis Armstrong - What A Wonderful World.mp3");
//       switch (playing) {
//         case 1:
//           world.play();
//           playing = 0;
//           break;
//
//         case 0:
//           delete world;
//           break;
//       }
//
//     case "Luv(sic)":
//       var aruarian = new Audio("music/Nujabes - Luv_sic (feat.Shing02).mp3");
//       switch (playing) {
//         case 1:
//           aruarian.play();
//           playing = 0;
//           break;
//
//         case 0:
//           delete aruarian;
//           break;
//       }
//
//     default: console.log(key);
//
//   }
// }








// this is a messy function, acutally you only need the part that is inside default
// but since I want the innerHTML to be original: Luv(sic), and parentheses are invalid argument
// so write a special case for detecting Luv(sic)

// function buttonAnimation(currentKey) {
//
//     var activation = document.querySelector("." + currentKey);
//
//     activation.classList.add("pressed");
//
//     setTimeout(function() {
//       activation.classList.remove("pressed");
//     }, 100);
//
//
// }
