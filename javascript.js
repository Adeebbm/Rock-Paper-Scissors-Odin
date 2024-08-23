function getComputerValue(){
    let guess = Math.floor(Math.random()*3) + 1;
    if(guess == 1)return "Rock";
    else if(guess == 2)return "Paper";
    else return "Scissors";
}

function validValue(s){
    return s == "Rock" || s == "Paper" || s == "Scissors";
}

function getHumanValue(){
    let guess = "l";
    while(! validValue(guess)){
        guess = prompt("Enter your guess(Rock-Paper-Scissors):");
        guess = guess.charAt(0).toUpperCase() + guess.slice(1).toLowerCase();
    }
    return guess;
}

function(){

}
function playRound(humanGuess,computerGuess){
    if(humanGuess == "Rock"){
        computerGuess == "Paper" ? computerScore++ : humanScore++;
    }else if(humanGuess == "Paper"){
        computerGuess == "Scissors" ? computerScore++ : humanScore++;
    }else{
        computerGuess == "Rock" ? computerScore++ : humanScore++;
    }
}

let humanScore = 0;
let computerScore = 0;



