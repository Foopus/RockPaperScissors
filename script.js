// PSEUDOCODE
/* Fire Water Grass */

/*
1. Create insructional text with a button to begin, store this in a function called gameReset
    where scores are reset and calling upon the function will resart the game.
2. When button is clicked change text to selection instructions, activate 
    pokemon image on mousover while hovering
    over balls.
3. On click of selection, play sound and run game.
4. Display text with results and effects. Add to score counter.
5. When either win or loss count reaches 5, change text to final results and display button
    that resets via gameStart function.
*/

let count = 0;
let wins = 0;
let losses = 0;
let draws = 0;

const displayedText = document.querySelector("#displayedText");
const displayedButton = document.querySelector("#buttonDiv");

const clickFire = document.querySelector('#fire');
const clickWater = document.querySelector('#water');
const clickGrass = document.querySelector('#grass');


function setChar(){
    document.getElementById("fire").src="images/charmander.png";  
}
function setSqui(){
    document.getElementById("water").src="images/squirtle.png";
}
function setBulb(){
    document.getElementById("grass").src="images/bulbasaur.png";
}
function fireBall(){
    document.getElementById("fire").src="images/pokeball.png";
}
function waterBall(){
    document.getElementById("water").src="images/pokeball.png";
}
function grassBall(){
    document.getElementById("grass").src="images/pokeball.png";
}

const winId = document.querySelector("#wins");
const winCount = document.createElement("span");
    winCount.classList.add("winCount");
    winCount.textContent =`${ wins}`;
winId.appendChild(winCount);

const lossesId = document.querySelector("#losses");
const lossesCount = document.createElement("span");
    lossesCount.classList.add("lossesCount");
    lossesCount.textContent =`${ losses}`;
lossesId.appendChild(lossesCount);

const drawsId = document.querySelector("#draws");
const drawsCount = document.createElement("span");
    drawsCount.classList.add("drawsCount");
    drawsCount.textContent =`${ draws}`;
drawsId.appendChild(drawsCount);


const startText = "Time to fuck up Gary! Click to begin game. First to 5 wins!";
const startButton = "Play";

const choiceText = "Choose your Pokemon!"

const playButton = "Fuck 'em up!"

function gameReset(){
    // Resets the score counter

    count = 0;
    wins = 0;
    losses = 0;
    draws = 0;

}

const addText1 = document.createElement("div1");
const addButton = document.createElement("button");

function interfaceText(insertText){
    // Inserts text via DOM tree
      
    addText1.classList.add("addText1");
    addText1.textContent = `${insertText}`;
        
    displayedText.appendChild(addText1);
}

function interfaceButton(insertButton){
    // Inserts button via DOM tree

    addButton.classList.add("addButton");
    addButton.textContent = `${insertButton}`;
    
    displayedButton.appendChild(addButton);
} 

interfaceText(startText);
interfaceButton(startButton);

function removeText(){
    const textParent = document.getElementById("displayedText");
    textParent.removeChild(addText1);
}

function removeButton(){
    const buttonParent = document.getElementById("buttonDiv");
    buttonParent.removeChild(addButton); 
}

function choosePokemon(){

    clickFire.addEventListener('click', (e) => {
        const choice = "FIRE"
        removeText();
        console.log(`${choice}`);
        interfaceButton(playButton);
        interfaceText(`You chose ${choice}!`);
        addText1.style.cssText = 'color: red;';
    });
    
    clickWater.addEventListener('click', (e) => {
        const choice = "WATER"
        removeText();
        console.log(`${choice}`);
        interfaceButton(playButton);
        interfaceText(`You chose ${choice}!`);
        addText1.style.cssText = 'color: blue;';
    });

    clickGrass.addEventListener('click', (e) => {
        const choice = "GRASS"
        removeText();
        console.log(`${choice}`);
        interfaceButton(playButton);
        interfaceText(`You chose ${choice}!`);
        addText1.style.cssText = 'color: green;';
    });
}

    
function beginClick(){
    
    displayedButton.addEventListener('click', (e) => {

    removeText();
    removeButton();
    interfaceText(choiceText);
    console.log('First Click');
    choosePokemon();
});
}

beginClick();




// gameReset();

// displayedButton.addEventListener('click', (e) => {
//     gameSelect();
//     alert('click');
// }); 


// PSEUDOCODE
/* Rock Paper Scissors */

/* Declare variables to represent computer answer, user answer, game count, win/loss/draw count.
Create a function that randomly selects the computers answer from an array.
Another function that prompts for the users choice and that formats it properly to match the computer answer.
Create a game function that plays a round. 
Create 'for' loop such that the game restarts with parameters reset each iterataion with w/l/d and 
count outside of game updates and plays 5 games.
Lastly an end game alert. */

// THIS PORTION DECLARES THE GLOBAL SCORE COUNT AND NEEDED VARIABLES.



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

//game();

//alert(`That was fun! Your score is ${wins}-${losses}-${draws}. ${gameOver()}`);



