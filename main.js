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
    } else if (((comp == 'rock')) && ((user == 'scissors')) || (comp == 'paper') && (user == 'rock') || (comp == 'scissors') && (user == 'paper')){
        winner = 'Computer';
    } else {
        winner = 'User';
    }

    return [user, comp, winner];
};

function displayScore(div, results){
    div.textContent = `Your choice: ${results[0]} \n Computer's choice: ${results[1]} \n And the winner is ${results[2]}`;
}

let user = "none";
let score = document.querySelector("#score");
let menu = document.querySelector('#menu');
menu.addEventListener("click", (event) => {
    let target = event.target;
    user = target.id;
    let results = playRound(user);
    console.log(results);
    displayScore(score, results)
});


// GAME LOOP FOR 5 ROUNDS MATCH

// function game(){
//     let winner = "none";
//     let user_score = 0;
//     let comp_score = 0;

//     console.log("Hi! Let's play rock, paper, scissors! The rules are simple, 5 rounds of you vs computer. Input either r, p, s to choose your shot.");

//     for (let i = 0; i<5; i++){
//         winner = playRound();
//         if (winner == "comp"){
//             comp_score++;
//             console.log("Oops, this round goes to the computer")
//             console.log(`The score is: \n Computer: ${comp_score} \n User: ${user_score}`)
//         } else if (winner == "user"){
//             user_score++;
//             console.log("Hooray, this round goes to the user")
//             console.log(`The score is: \n Computer: ${comp_score} \n User: ${user_score}`)
//         } else {
//             console.log("A Draw!");
//             console.log(`The score is: \n Computer: ${comp_score} \n User: ${user_score}`)
//         }
//     }

//     if (comp_score > user_score){
//         console.log("Computer wins!");
//     } else if (user_score > comp_score) {
//         console.log("User wins");
//     } else {
//         console.log("A Draw");
//     }
//     console.log(`The final score is: \n Computer: ${comp_score} \n User: ${user_score}`)
// }

//game();