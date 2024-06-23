let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () =>{
    console.log("Game was draw")
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++
        compScorePara.innerText = compScore;
        console.log("you loose!"); 
        msg.innerText =` You loose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () =>{
    const options =["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]
}


const playGame = (userChoice) =>{
    console.log("user choice",userChoice);
    // Genarate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice is",compChoice)

    if(userChoice === compChoice){
        // Draw game
        drawGame();
    } else{
        let userWin = true;
      if(userChoice === "rock"){
            // scissor,paper
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper"){
            //rock,scissor
            userWin = compChoice === "scissor"?false : true;
        }else{
            //rock,paper
             userWin = compChoice === "rock"?false : true;
        }
     showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        // console.log("Choise was clicked",userChoice)
        playGame(userChoice);
    })
})

