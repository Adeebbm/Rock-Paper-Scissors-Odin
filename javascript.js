function getComputerChoice(){
    let Choice = Math.floor(Math.random()*3) + 1;
    if(Choice == 1)return "Rock";
    else if(Choice == 2)return "Paper";
    else return "Scissors";
}

function validChoice(s){
    return s == "Rock" || s == "Paper" || s == "Scissors";
}

function getHumanChoice(){
    let Choice = "l";
    while(! validChoice(Choice)){
        Choice = prompt("Enter your Choice(Rock-Paper-Scissors):");
        Choice = Choice.charAt(0).toUpperCase() + Choice.slice(1).toLowerCase();
    }
    return Choice;
}

function playRound(humanChoice,computerChoice){
    if(humanChoice == computerChoice){
        displayRoundResult("tie",computerChoice,humanChoice);
    }else if(humanChoice == "Rock" && computerChoice == "Paper" || humanChoice == "Paper" && computerChoice == "Scissors" || humanChoice == "Scissors" && computerChoice == "Rock"){
        computerScore++;
        displayRoundResult("comp",computerChoice,humanChoice);
    }else{
        humanScore++;
        displayRoundResult("Human",computerChoice,humanChoice);
    }
    
}

function displayRoundResult(winner,computerChoice,humanChoice){
    if(winner == "tie"){
        console.log("You both chose " + humanChoice + ", it's a tie");
    }else{
    let result;
        winner == "comp" ? result = "lose" : result = "win";
        console.log("Computer chose " + computerChoice + " and you chose " + humanChoice + ", you " + result + " this round");
    }
    console.log(`Your Score: ${humanScore}  , computer score: ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(),getComputerChoice());


