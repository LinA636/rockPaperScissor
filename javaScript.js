function getComputerChoice() {
    // returns randomly either 'Rock', 'Paper' or 'Scissor'
    let weaponArray = ['rock', 'paper', 'scissor'];
    return weaponArray[Math.floor(Math.random() * weaponArray.length)];
}

function playRound(playerSelection, computerSelection) {
    // returns a text based on if player won or lost this round

    if (playerSelection === 'rock' && computerSelection === 'rock'
        || playerSelection === 'paper' && computerSelection === 'paper'
        || playerSelection === 'scissor' && computerSelection === 'scissor') {
        // tie
        console.log("It seams like neither your nor the computers weapon can beat the other.");
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissor' && computerSelection === 'paper') {
        // player wins
        console.log("Your choice was well made.");
        counterPlayerWin += 1;
    } else {
        // computer wins
        console.log("I'm sure you will do better next time!");
        counterCompWin += 1;
    }
}

function game() {
    // one games persists of 5 rounds
    // keep track of the outcomes as well as tell the player
    // end the game by telling the winner
    console.log("Lets see if you choose wisely..")
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (i < 4) {
            printScore();
        }
    }

    printFinalScore();

}

function getPlayerChoice() {
    // get player to enter their choice
    let playerSelection = prompt("Please enter Paper, Rock or Scissor: ");
    // convert entered choice into lowerCase letters
    // to be able to compare.
    playerSelection = playerSelection.toLowerCase();

    while (!controlPlayerChoice(playerSelection)) {
        playerSelection = getPlayerChoice();
    }
    return playerSelection;
}

function controlPlayerChoice(playerSelection) {
    /* controlPlayerChoice controls the input of the player.
    If the input is not 'Rock', 'Paper', or 'Scissor' the function will return false
    otherwise true */
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor') {
        return true;
    }
    console.log("Your choice of weapon is not allowed. Make a new decision: ");
    return false;
}

function printScore() {
    // prints current score based on the global Variables
    if (counterPlayerWin > counterCompWin) {
        // player is leading
        console.log(`current score: ${counterPlayerWin}:${counterCompWin} for you`);
        console.log(`Keep  it up!`);
    } else if (counterPlayerWin < counterCompWin) {
        // computer is leading
        console.log(`current score: ${counterPlayerWin}:${counterCompWin} for your opponent`);
        console.log(`Don't give up!`);
    } else {
        // its a tie
        console.log(`current score: ${counterPlayerWin}:${counterCompWin}`);
    }

}

function printFinalScore() {
    // prints finalt score based on the global Variables
    if (counterPlayerWin > counterCompWin) {
        // player wins
        console.log(`Congratulations, you win: ${counterPlayerWin}:${counterCompWin}`);
        console.log(`You obviously are a master of your chosen weapons.`);
    } else if (counterPlayerWin < counterCompWin) {
        // computer is leading
        console.log(`I'm sorry to tell you, that you lost: ${counterPlayerWin}:${counterCompWin}`);
        console.log(`Keep training with your weapons.`);
    } else {
        // its a tie
        console.log(`It's a tie: ${counterPlayerWin}:${counterCompWin}`);
    }
}


let counterPlayerWin = 0;
let counterCompWin = 0;
game();