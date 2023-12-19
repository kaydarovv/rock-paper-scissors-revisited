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

    console.log(user);
    console.log(comp);
    console.log(input);
    console.log(winner + ' wins!')

    return winner;
}

playRound();