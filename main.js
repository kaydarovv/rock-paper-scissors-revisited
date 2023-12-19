function compChoice(){
    return Math.floor(Math.random() * (3-1+1)) + 1;
}

// 1-rock 2-paper 3-scissors
function playRound(){
    let winner = "draw";
    let comp = compChoice();
    let input = prompt("Rock, Paper, Scissors, Shoot!").toLowerCase();
    user = (input == "r") ? 1 :
            (input == "p") ? 2 :
            (input == "s") ? 3 : 0;

    if (user == comp){
        winner = 'draw';
    } else if (((comp == 1)) && ((user == 3)) || (comp == 2) && (user == 1) || (comp == 3) && (user == 2)){
        winner = 'comp';
    } else {
        winner = 'user';
    }

    return winner;
}

function game(){
    let winner = "none";
    let user_score = 0;
    let comp_score = 0;

    console.log("Hi! Let's play rock, paper, scissors! The rules are simple, 5 rounds of you vs computer. Input either r, p, s to choose your shot.");

    for (let i = 0; i<5; i++){
        winner = playRound();
        if (winner == "comp"){
            comp_score++;
            console.log("Oops, this round goes to the computer")
            console.log(`The score is: \n Computer: ${comp_score} \n User: ${user_score}`)
        } else if (winner == "user"){
            user_score++;
            console.log("Hooray, this round goes to the user")
            console.log(`The score is: \n Computer: ${comp_score} \n User: ${user_score}`)
        } else {
            console.log("A Draw!");
            console.log(`The score is: \n Computer: ${comp_score} \n User: ${user_score}`)
        }
    }

    if (comp_score > user_score){
        console.log("Computer wins!");
    } else if (user_score > comp_score) {
        console.log("User wins");
    } else {
        console.log("A Draw");
    }
    console.log(`The final score is: \n Computer: ${comp_score} \n User: ${user_score}`)
}

game();