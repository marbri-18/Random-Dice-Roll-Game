var randomNumber1 = Math.floor((Math.random() * 6) +1);

function diceRoll1(){
    if(randomNumber1 === 1){
     document.getElementById("img1").setAttribute("src","images/dice1.png");
    }
    else if (randomNumber1 === 2){
      document.getElementById("img1").setAttribute("src","images/dice2.png");
    }
    else if (randomNumber1 === 3){
      document.getElementById("img1").setAttribute("src","images/dice3.png");
    }
    else if (randomNumber1 === 4){
      document.getElementById("img1").setAttribute("src","images/dice4.png");
    }
    else if (randomNumber1 === 5){
      document.getElementById("img1").setAttribute("src","images/dice5.png");
    }
    else if (randomNumber1 === 6){
      document.getElementById("img1").setAttribute("src","images/dice6.png");
    }
}
diceRoll1();

var randomNumber2 = Math.floor((Math.random() * 6) +1);

function diceRoll2(){
    if(randomNumber2 === 1){
     document.getElementById("img2").setAttribute("src","images/dice1.png");
    }
    else if (randomNumber2 === 2){
      document.getElementById("img2").setAttribute("src","images/dice2.png");
    }
    else if (randomNumber2 === 3){
      document.getElementById("img2").setAttribute("src","images/dice3.png");
    }
    else if (randomNumber2 === 4){
      document.getElementById("img2").setAttribute("src","images/dice4.png");
    }
    else if (randomNumber2 === 2){
      document.getElementById("img2").setAttribute("src","images/dice5.png");
    }
    else if (randomNumber2 === 6){
      document.getElementById("img2").setAttribute("src","images/dice6.png");
    }
}
diceRoll2();

function displayResult(){
    if (randomNumber1 > randomNumber2){
        document.getElementById("title").innerHTML = "Player 1 wins!";
    }
    else if (randomNumber1 < randomNumber2){
        document.getElementById("title").innerHTML = "Player 2 wins!";
    }
    else if (randomNumber1 === randomNumber2){
        document.getElementById("title").innerHTML = "it's a draw! Try again";
    }

}
displayResult();
