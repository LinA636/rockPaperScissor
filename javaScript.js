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
    const playerSelectionImg = document.createElement("img");
    playerSelectionImg.classList.add("player-selection");
    playerSelectionImg.src = "./image/paper.png";
    imgOfSelectionContainer.appendChild(playerSelectionImg);
    
    const paraVS = document.createTextNode("vs.");
    imgOfSelectionContainer.appendChild(paraVS);

    const compSelectionImg = document.createElement("img");
    compSelectionImg.classList.add("comp-selection");
    compSelectionImg.src = "./images/paper.png";
    imgOfSelectionContainer.appendChild(compSelectionImg);

    //right-container and its children
    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");
    changeContainer.appendChild(rightContainer);

    const paraTotalScore = document.createTextNode("total Score:");
    rightContainer.appendChild(paraTotalScore);

    const scoreDisplay = document.createElement("p");
    scoreDisplay.classList.add("score-display");
    scoreDisplay.setAttribute("class", "score-display");
    rightContainer.appendChild(scoreDisplay);
}

function changeImage(selection, selectorKey){
    const imgage = document.querySelector(".player-image");
    if(selection == "paper"){
        imgage.src = "./images/paper.png";
        imgage.alt = "Hand fomring a paper.";
    } else if (selection == "rock"){
        imgage.src = "../image/rock.png";
    } else if (selection == "scissor"){
        imgage.src = "./images/scissor.png";
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




