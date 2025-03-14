function getComputerChoice(){
    const randomNum = Math.random();
    if (randomNum < 0.33){
        return 'rock';
    } else if (randomNum < 0.66) {
        return 'paper';
    } else{
        return 'scissors';
    }
};

function getHumanChoice () {
    let a = prompt("enter rock, paper, scissor").toLowerCase();
    
    while (a !== "rock" && a !== "paper" && a !== "scissors") {
        a = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return a;
}

function playRound (){
    let p1 = getHumanChoice()
    let npc = getComputerChoice()
    console.log(p1)
    console.log(npc)
    if ([p1 , npc].includes("rock") && npc === "paper"){
        return console.log(`You lose! ${npc} beats ${p1}`);
    } else if (p1 === "paper" && npc === "scissors"){
        return console.log(`You lose! ${npc} beats ${p1}`);
    } else if (p1 === "scissors" && npc === "rock"){
        return console.log(`You lose! ${npc} beats ${p1}`);
    } else {
        return console.log("draw");
    }
}

function playgame() {
    let round = 0
    while (round<5 ) {
        playRound() 
        round += 1
    }
}
playgame()