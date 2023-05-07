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

function changeScoreDisplay() {
    const scoreDisplayText = document.querySelector(".score-display");
    if (counterPlayerWin > counterCompWin) {
        // player is leading
        // change "score-display"
        scoreDisplayText.innerHTML = `You are leading:
            ${counterPlayerWin}:${counterCompWin}`;
    } else if (counterPlayerWin < counterCompWin) {
        // computer is leading
        // change "score-display"
        scoreDisplayText.innerHTML = `You are loosing:\n${counterPlayerWin}:${counterCompWin}`;
    } else {
        // its a tie
        // change "score-display"
        scoreDisplayText.innerHTML = `It's a tie:\n${counterPlayerWin}:${counterCompWin}`;
    }

}

function showFinalScore() {
    const imgOfSelectionContainer = document.querySelector(".imgOfSelection-container");
    imgOfSelectionContainer.remove();

    const gameStateText = document.querySelector(".game-state-text");
    gameStateText.remove();

    const winLooseAnnouncement = document.querySelector(".win-loose-announcement");
    if(counterPlayerWin > counterCompWin){
        winLooseAnnouncement.innerHTML = "You WON!";
    } else if (counterPlayerWin === counterCompWin){
        winLooseAnnouncement.innerHTML = "It's a tie!";
    } else {
        winLooseAnnouncement.innerHTML = "You lost.";
    }

    const scoreDisplayText = document.querySelector(".score-display");
    scoreDisplayText.innerHTML = `${counterPlayerWin}:${counterCompWin}`;

    const buttonRock = document.querySelector(".rock");
    buttonRock.remove();

    const buttonScissor = document.querySelector(".scissor");
    buttonScissor.remove();

    const buttonPaper = document.querySelector(".paper");
    buttonPaper.remove();

    const buttonContainer = document.querySelector(".button-container");
    const newButton = document.createElement("button");
    newButton.classList.add("newGame-button");
    newButton.textContent = `new game`;
    newButton.addEventListener('click', startNewGame);
    buttonContainer.appendChild(newButton);
}

function startNewGame(){
    location.reload();
}

function createDOMNodes() {
    const changeContainer = document.querySelector(".change-container");
    const gameStateTest = document.querySelector(".game-state-text"); 
    
    //leftContainer and its children
    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");
    changeContainer.appendChild(leftContainer);
    leftContainer.appendChild(gameStateTest);
    
    const imgOfSelectionContainer = document.createElement("div");
    imgOfSelectionContainer.classList.add("imgOfSelection-container");
    leftContainer.appendChild(imgOfSelectionContainer);

    const winLooseAnnouncement = document.createElement("p");
    winLooseAnnouncement.classList.add("win-loose-announcement");
    leftContainer.appendChild(winLooseAnnouncement);

    //children of imgOfSelection-container
    const divPlayerImg = document.createElement("div");
    divPlayerImg.classList.add("player-selection-div");
    imgOfSelectionContainer.appendChild(divPlayerImg);
    const playerSelectionImg = document.createElement("img");
    playerSelectionImg.classList.add("player-selection-img");
    playerSelectionImg.src = "./images/paper.png";
    divPlayerImg.appendChild(playerSelectionImg);
    
    const paraVS = document.createTextNode("vs.");
    const paraVScontainer = document.createElement("p");
    paraVScontainer.appendChild(paraVS);
    imgOfSelectionContainer.appendChild(paraVScontainer);

    const divCompImg = document.createElement("div");
    divCompImg.classList.add("comp-selection-div");
    imgOfSelectionContainer.appendChild(divCompImg);
    const compSelectionImg = document.createElement("img");
    compSelectionImg.classList.add("comp-selection-img");
    compSelectionImg.src = "./images/paper.png";
    divCompImg.appendChild(compSelectionImg);

    //right-container and its children
    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");
    changeContainer.appendChild(rightContainer);

    const scoreDisplay = document.createElement("p");
    scoreDisplay.classList.add("score-display");
    const scoreText = document.createTextNode("0:0");
    scoreDisplay.appendChild(scoreText);
    rightContainer.appendChild(scoreDisplay);
}

function changeImage(selection, selectorKey){
    const image = document.querySelector(selectorKey);
    if(selection == "paper"){
        image.src = "./images/paper.png";
        image.alt = "Hand fomring a paper.";
    } else if (selection == "rock"){
        image.src = "./images/rock.png";
    } else if (selection == "scissor"){
        image.src = "./images/scissor.png";
    } else {

    }
}

function changeWinLooseAnnouncement(winLoose){
    const announcement = document.querySelector(".win-loose-announcement");
    if(winLoose == "won"){
        // change text in "win-loose-announcement"
        announcement.innerHTML = `Congrats, you won this round!`;
    }else if(winLoose == "lost"){
        // change text in "win-loose-announcement"
        announcement.innerHTML = `Sorry, you lost this round.`;
    }else if(winLoose == "tie"){
        // change text in "win-loose-announcement"
        announcement.innerHTML = `This is a tie.`;
    }else{
        // error handling
    }
}

function changeGameStateText(counterClicks){
    const gameStateTextParagraph = document.querySelector(".game-state-text");
    gameStateTextParagraph.innerHTML = `round: ${counterClicks} out of 5`;  
}


function handleButtonClick(playerSelection) {
    counterClicks += 1;
    if(counterClicks == 1){
        createDOMNodes();
    }
    let computerSelection = getComputerChoice();
    changeImage(playerSelection, ".player-selection-img");
    changeImage(computerSelection, ".comp-selection-img")
    let winLoose = playRound(playerSelection, computerSelection);
    changeWinLooseAnnouncement(winLoose);
    changeGameStateText(counterClicks);
    changeScoreDisplay();
    if(counterClicks == 5){
        showFinalScore();
    }
    
}

let counterPlayerWin = 0;
let counterCompWin = 0;
let counterClicks = 0;




