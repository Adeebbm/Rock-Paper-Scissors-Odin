function getComputerChoice(){
    let Choice = Math.floor(Math.random()*3) + 1;
    if(Choice == 1){
        computerImage.src = "images/rock.png";
        return "Rock";
    }else if(Choice == 2){
        computerImage.src = "images/paper.png";
        return "Paper";
    }else{
        computerImage.src = "images/scissors.png";
        return "Scissors";
    }
}

// function validChoice(s){
//     return s == "Rock" || s == "Paper" || s == "Scissors";
// }

// function getHumanChoice(){
//     let Choice = "l";
//     while(! validChoice(Choice)){
//         Choice = prompt("Enter your Choice(Rock-Paper-Scissors):");
//         Choice = Choice.charAt(0).toUpperCase() + Choice.slice(1).toLowerCase();
//     }
//     return Choice;
// }

function playRound(humanChoice,computerChoice){
    if(humanChoice == computerChoice){
        displayRoundResult("tie",computerChoice,humanChoice);
    }else if(humanChoice == "Rock" && computerChoice == "Paper" || humanChoice == "Paper" && computerChoice == "Scissors" || humanChoice == "Scissors" && computerChoice == "Rock"){
        computerScore++;
        computerScoreDisplay.textContent = String(computerScore);
        displayRoundResult("comp",computerChoice,humanChoice);
    }else{
        humanScore++;
        humanScoreDisplay.textContent = String(humanScore);
        displayRoundResult("Human",computerChoice,humanChoice);
    }
    if(humanScore == 5 || computerScore == 5){
        gameOngoing = false;
        humanScore == 5 ?  resultDisplay.textContent = "You Win!!" : resultDisplay.textContent = "You loose";
    }
}

function displayRoundResult(winner,computerChoice,humanChoice){
    if(winner == "tie"){
        console.log("You both chose " + humanChoice + ", it's a tie");
        resultDisplay.textContent = "Tie";
    }else{
    let result;
        winner == "comp" ? resultDisplay.textContent = "you lose this round" : resultDisplay.textContent = "you win this round";
        console.log("Computer chose " + computerChoice + " and you chose " + humanChoice + ", you " + result + " this round");
    }
    console.log(`Your Score: ${humanScore}  , computer score: ${computerScore}`);
}


function reset(){
    humanScore = 0;
    computerScore = 0;
    humanImage.src = "images/question-mark.png";
    computerImage.src = "images/question-mark.png";
    humanScoreDisplay.textContent = String(humanScore);
    computerScoreDisplay.textContent = String(humanScore);
    resultDisplay.textContent = 'New Game';
}

let humanScore = 0;
let computerScore = 0;

let humanImage = document.querySelector(".player-choice-display > img");
let computerImage = document.querySelector(".computer-choice-display > img");
let humanScoreDisplay = document.querySelector(".player-score-display > div:nth-child(2)");
let computerScoreDisplay = document.querySelector(".computer-score-display > div:nth-child(2)");
let resultDisplay = document.querySelector(".result-display");

let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");
let newGameButton =document.querySelector(".new-game");

let gameOngoing = false;

rockButton.addEventListener('click',() => {
    if(!gameOngoing){
        reset();
        gameOngoing = true;
    }
    gameOngoing = true;
    humanImage.src = "./images/rock.png";
    playRound("Rock",getComputerChoice());
});

paperButton.addEventListener('click',() => {
    if(!gameOngoing){
        reset();
        gameOngoing = true;
    }
    humanImage.src = "./images/paper.png";
    playRound("Paper",getComputerChoice());
});

scissorsButton.addEventListener('click',() =>{
    if(!gameOngoing){
        reset();
        gameOngoing = true;
    }
    humanImage.src = "./images/scissors.png";
    playRound("Scissors",getComputerChoice());
});

newGameButton.addEventListener("click",reset);
