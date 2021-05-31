var diceRoll1 = Math.floor(Math.random() * 6) + 1;  

var diceRoll2 = Math.floor(Math.random() * 6) + 1;

if (diceRoll1 > diceRoll2){
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if (diceRoll2 > diceRoll1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = 'Draw';
}

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + diceRoll1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + diceRoll2 + ".png");