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

for (i = 0; i < 5;){
    
    const ansArray = ["Rock", "Paper", "Scissors"]
    const compSelection = Math.floor(Math.random() * ansArray.length);
    //console.log(ansArray[compSelection]);
    const compAns = ansArray[compSelection];
    //console.log(compAns);
    

// THIS PORTION TAKES IN THE USER INPUT AND AND FORMATS IT TO START WITH A CAPITAL AND FORMAT THE REST TO LOWER CASE

    let userInput = prompt("Please type Rock, Paper or Scissors","");
    let userAns;


   function textFormat(){

        let cap = userInput.slice(0, 1);
        let rest = userInput.slice(1);
        cap = cap.toUpperCase();
        rest = rest.toLowerCase();

        return (cap + rest);
    }

    userAns = textFormat(userInput);

// THIS PORTION CHECKS THE ANSWER AGAINST THE COMPUTER'S, CONFIRMS VALIDITY OF ANSWER, AND ADDS TO SCORE AND GAME COUNT.

    console.log("You chose " + userAns);
    console.log("The computer chose " + compAns);


    if (compAns === userAns)
    {
        draws += 1;
        i++;
        console.log("It's a draw! Let's play again!")
    } 
    
    else if ((userAns == "Rock" && compAns == "Scissors")||
    (userAns == "Scissors" && compAns == "Paper")||
    (userAns == "Paper" && compAns == "Rock"))
    {
        wins += 1;
        i++;
        console.log("You win!");
    }

    else if ((compAns == "Rock" && userAns == "Scissors")||
    (compAns == "Scissors" && userAns == "Paper")||
    (compAns == "Paper" && userAns == "Rock"))
    {
        losses += 1;
        i++
        console.log("You lose!");
    }

    else {console.log("Please type rock, paper or scissors.")};

    let count = parseInt(wins + losses + draws);

    console.log("Wins: " + wins + " Losses: " + losses + " Draws: " + draws + " Games Played: " + count)


}