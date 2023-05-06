function getComputerChoice() {
    // returns randomly either 'Rock', 'Paper' or 'Scissor'
    let weaponArray = ['rock', 'paper', 'scissor'];
    return weaponArray[Math.floor(Math.random() * weaponArray.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock'
        || playerSelection === 'paper' && computerSelection === 'paper'
        || playerSelection === 'scissor' && computerSelection === 'scissor') {
        return "tie";
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissor' && computerSelection === 'paper') {
        counterPlayerWin += 1;
        return "won";
    } else {
        counterCompWin += 1;
        return "lost";
    }
}

function printScore() {
    const paraScoreText = document.querySelector(".score");
    paraScoreText.textContent("test");

    if (counterPlayerWin > counterCompWin) {
        // player is leading
        // change "score-display"
    } else if (counterPlayerWin < counterCompWin) {
        // computer is leading
        // change "score-display"
        
    } else {
        // its a tie
        // change "score-display"
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

function createDOMNodes() {
    const mainContainer = document.querySelector(".main-container");
    const imageContainer = document.querySelector(".button-container");
       
    const divScoreContainer = document.createElement("div");
    divScoreContainer.classList.add("score-container");
    mainContainer.insertBefore(divScoreContainer, imageContainer);

    const divShowSelection = document.createElement("div");
    divScoreContainer.appendChild(divShowSelection);
    divShowSelection.classList.add("show-selection");

    const img1 = document.createElement("img");
    img1.setAttribute("class", "player-image");
    img1.src = "./images/paper.png";
    divShowSelection.appendChild(img1);
    
    const paraVS = document.createTextNode("vs.");
    divShowSelection.appendChild(paraVS);

    const img2 = document.createElement("img");
    img2.setAttribute("class", "computer-image");
    img2.src = "./images/paper.png";
    divShowSelection.appendChild(img2);

    const paraScoreText = document.createElement("p");
    paraScoreText.setAttribute("class", "score");
    divScoreContainer.appendChild(paraScoreText);
}

function changeImage(selction, selectorKey){
    const img = document.querySelector(".player-image");
    if(selction == "paper"){
        img.src = "./images/paper.png";
    } else if (selction == "rock"){
        img.src = "../image/rock.png";
    } else if (selction == "scissor"){
        img.src = "./images/scissor.png";
    } else {

    }
}

function changeWinLooseAnnouncement(winLoose){
    if(winLoose == "won"){
        // change text in "win-loose-announcement"
    }else if(winLoose == "lost"){
        // change text in "win-loose-announcement"
    }else if(winLoose == "tie"){
        // change text in "win-loose-announcement"
    }else{
        // error handling
    }
}

function changeGameStateText(counterClicks){
    const gameStateTextParagraph = document.querySelector(".game-state-text");
    gameStateTextParagraph.innerHTML = `${counterClicks} out of 5`;  
}

function changeScoreDisplay(){
    // change the text in "score-display"
}

function handleButtonClick(playerSelection) {
    counterClicks += 1;
    if(counterClicks == 1){
        createDOMNodes();
    }
    let computerSelection = getComputerChoice();
    changeImage(playerSelection, ".player-image");
    changeImage(computerSelection, ".comp-image")
    let winLoose = playRound(playerSelection, computerSelection);
    changeWinLooseAnnouncement(winLoose);
    changeGameStateText(counterClicks);
    changeScoreDisplay();
    
}

let counterPlayerWin = 0;
let counterCompWin = 0;
let counterClicks = 0;




