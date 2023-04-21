function Refresh() {
    var number1 = Math.random();
    number1 = Math.floor(number1 * 6) + 1;

    var number2 = Math.random();
    number2 = Math.floor(number2 * 6) + 1;

    var player1 = document.getElementById("dice1");
    var player2 = document.getElementById("dice2");

    player1.setAttribute("src", `./images/dice${number1}.png`);
    player2.setAttribute("src", `./images/dice${number2}.png`);

    var h1 = document.querySelector("h1");

    if (number1 > number2) {
        h1.innerHTML = "PLAYER 1 WINS !!";
    }
    else if (number2 > number1) {
        h1.innerHTML = "PLAYER 2 WINS !!";
    }
    else {
        h1.innerHTML = "IT IS A DRAW<br>Refresh Again";
    }
}