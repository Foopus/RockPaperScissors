/* Rock Paper Scissors */

// PSEUDOCODE

/* Declare variables to represent computer answer, user answer, game count, win/loss/draw count.
Create a function that randomly selects the computers answer from an array.
Another function that prompts for the users choice and that formats it properly to match the computer answer.
Create a game function that plays a round. 
Create 'for' loop such that the game restarts with parameters reset each iterataion with w/l/d and 
count outside of game updates and plays 5 games.
Lastly an end game alert. */

// THIS PORTION DECLARES THE GLOBAL SCORE COUNT AND NEEDED VARIABLES.

let count = 0
let wins = 0
let losses = 0
let draws = 0

let computerSelection;
let playerSelection;

let roundDraw;
let roundLoss;
let roundNull;
let roundWin;

let userInput;

// THIS FUNCTION RETURNS THE CUMPUTER SELECTION RANDOMLY FROM AN ARRAY.

function computerPlay()

{
    
    const ansArray = ["Rock", "Paper", "Scissors"]
    const computerRandomAnswer = Math.floor(Math.random() * ansArray.length);
    //console.log(ansArray[computerRandomAnswer]);
    computerSelection = ansArray[computerRandomAnswer];

    return computerSelection;
    
}



// THIS FUNCTION TAKES IN THE USER INPUT AND AND FORMATS IT TO START WITH A CAPITAL AND FORMAT THE REST TO LOWER CASE AND RETURNS THE PLAYER SELECTION. 

function userPlay()

{


   function textFormat(){

        let cap = userInput.slice(0, 1);
        let rest = userInput.slice(1);
        cap = cap.toUpperCase();
        rest = rest.toLowerCase();

        return (cap + rest);
    }

    playerSelection = textFormat(userInput);

    return playerSelection;
}



// THIS PORTION CHECKS THE ANSWER AGAINST THE COMPUTER'S, LOG'S THE RESULT, CONFIRMS VALIDITY OF ANSWER, AND ADDS TO SCORE AND GAME COUNT.

function playRound(A, B){

    console.log("You chose " + B);
    console.log("The computer chose " + A);


    if (A === B){
        draws += 1;
    return roundDraw;
    } 
    
    else if ((B == "Rock" && A == "Scissors")||
    (B == "Scissors" && A == "Paper")||
    (B == "Paper" && A == "Rock")){
        wins += 1;
        return roundWin;
    }

    else if((A == "Rock" && B == "Scissors")||
    (A == "Scissors" && B == "Paper")||
    (A == "Paper" && B == "Rock")){
        losses += 1;
    return roundLoss;
    }

    else {
    return roundNull;
    }

}


// THIS FUNCTION TAKES THE INPUTS FROM THE PRIVIOUS FUCNTIONS AND PLAYS 5 GAMES, NOT COUNTING GAMES WITH INVALID INPUTS.

function game()

{
   
    for (count = 0; count < 5; ){

    computerPlay();
    //console.log(computerSelection);
    userInput = prompt("Please type Rock, Paper or Scissors","");
    userPlay();

    roundDraw = "It's a draw! Let's play again!";
    roundLoss = `You lose! ${computerSelection} beats ${playerSelection}`;
    roundWin = `You win! ${playerSelection} beats ${computerSelection}!`;
    roundNull = `You lose! ${computerSelection} beats ${playerSelection}.You have to type Rock, Paper or Scissors you spineless slug!! We won't count your insolence. Play again.`;
    
    console.log(playRound(computerSelection, playerSelection));
 
    count = parseInt(wins + losses + draws);   

    console.log("Wins: " + wins + " Losses: " + losses + " Draws: " + draws + " Games Played: " + count);
}}


// THIS LAST FUNCTION ENDS THE GAME WITH AN ALERT WITH A W/L/D SCORE AND MESSAGE.

function gameOver()

{
    if (wins > losses){
        return "You win, SPANK ME DADDY!!";
    } else if (wins < losses){
        return "You lose, idiot!!";
    } else {
        return "It's a stalemate!";
    }
}

game();

alert(`That was fun! Your score is ${wins}-${losses}-${draws}. ${gameOver()}`);



