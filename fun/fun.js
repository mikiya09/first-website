
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;   // iamges/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



// ---- second dice ----

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



// who wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "∑ Play 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "ß Play 2 Winds!";
}

else {
  document.querySelector("h1").innerHTML = "Draw"
}
