let user = "none";
let score = document.querySelector("#score");
let menu = document.querySelector('#menu');
let userScore = 0;
let compScore = 0;
let round = 0;
let winner = 'noone';

// RESET BUTTON
let start = document.querySelector("#start-btn");

start.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    winner = 'noone';
    round = 0;
});

function compChoice(){
    return Math.floor(Math.random() * (3-1+1)) + 1;
};

function playRound(userChoice){
    let winner = "draw";
    let user = userChoice;
    let comp = compChoice();
    comp = (comp == 1) ? 'rock' :
            (comp == 2) ? 'paper' :
            (comp == 3) ? 'scissors' : 0;

    if (user == comp){
        winner = 'Noone';
    } else if (((comp === 'rock')) && ((user === 'scissors')) || (comp === 'paper') && (user === 'rock') || (comp === 'scissors') && (user === 'paper')){
        winner = 'Computer';
    } else {
        winner = 'User';
    }

    return [user, comp, winner];
};

function displayScore(div, results, userScore, compScore, round){
    div.textContent = `Round - ${round}. Your choice: ${results[0]}. Computer's choice: ${results[1]}. And the current score is: User - ${userScore}, Computer - ${compScore}`;
    if (round === 5){
        winner = (userScore > compScore) ? "User" 
            : (userScore < compScore) ? "Computer" 
            : "Noone";
        div.textContent += `. The Final winner is: ${winner}`;
    };
};

menu.addEventListener("click", (event) => {
    let target = event.target;
    user = target.id;
    let results = playRound(user);
    if (results[2] == 'Computer') {
        compScore += 1;
    } else if (results[2] == 'User') {
        userScore += 1;
    };
    round += 1
    displayScore(score, results, userScore, compScore, round)
});