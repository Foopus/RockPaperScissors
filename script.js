/* Rock Paper Scissors */

// PSEUDOCODE

/* Declare variables to represent computer answer, user answer, game count, win/loss/draw count.
A for loop such that the game restarts with parameters reset each iterataion with w/l/d and count outside of game updated */

//THIS PORTION DECLARES THE GLOBAL SCORE COUNT

let count = 0
let wins = 0
let losses = 0
let draws = 0


//THIS FIRST PORTION OF CODE SELECTS THE CUMPUTER RESPONSE RANDOMLY FROM AN ARRAY

function computerPlay()

{
    
    const ansArray = ["Rock", "Paper", "Scissors"]
    const computerRandomAnswer = Math.floor(Math.random() * ansArray.length);
    //console.log(ansArray[compSelection]);
    const computerResponse = ansArray[computerRandomAnswer];
    //console.log(compAns);

    return computerResponse;
    
}

let computerSelection = computerPlay()

console.log(computerSelection);

// THIS PORTION TAKES IN THE USER INPUT AND AND FORMATS IT TO START WITH A CAPITAL AND FORMAT THE REST TO LOWER CASE

    let userInput = prompt("Please type Rock, Paper or Scissors","");
    let playerSelection;


   function textFormat(){

        let cap = userInput.slice(0, 1);
        let rest = userInput.slice(1);
        cap = cap.toUpperCase();
        rest = rest.toLowerCase();

        return (cap + rest);
    }

    playerSelection = textFormat(userInput);

// THIS PORTION CHECKS THE ANSWER AGAINST THE COMPUTER'S, CONFIRMS VALIDITY OF ANSWER, AND ADDS TO SCORE AND GAME COUNT.

function playRound(A, B){

    console.log("You chose " + B);
    console.log("The computer chose " + A);


    if (A === B){
        draws += 1;
        console.log("It's a draw! Let's play again!");
    } 
    
    else if ((B == "Rock" && A == "Scissors")||
    (B == "Scissors" && A == "Paper")||
    (B == "Paper" && A == "Rock")){
        wins += 1;
        console.log(`You win! ${B} beats ${A}!`);
    }

    else if((A == "Rock" && B == "Scissors")||
    (A == "Scissors" && B == "Paper")||
    (A == "Paper" && B == "Rock")){
        losses += 1;
        console.log(`You lose! ${A} beats ${B}`);
    }

    else {
        console.log(`You lose! ${A} beats ${B}. You have to type Rock, Paper or Scissors you spineless slug!! We won't count your insolence. Play again.`);
    }


}

playRound(computerSelection, playerSelection);

    count += parseInt(wins + losses + draws);

    console.log("Wins: " + wins + " Losses: " + losses + " Draws: " + draws + " Games Played: " + count)


