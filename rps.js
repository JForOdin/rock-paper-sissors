let count = 0;
let newGame = new Game();

function chooseRock()
{
   newGame.update("rock");
}
function choosePaper()
{
   newGame.update("paper");
}
function chooseScissors()
{
    newGame.update("scissors");
}
function update()
{
    if(!newGame)
    {
        
    }
    console.log("Updating")
    let actionText = document.getElementById("c-action");

    if(newGame.playerWins >= 3 )
    {
        console.log("Congrats, You win this game!");
        actionText.textContent = "Congrats! You win this game!";
    }
    else if(newGame.computerWins >= 3)
    {
        console.log("Sorry, You lose this game!");
        actionText.textContent = "Sorry! You lost this time!";
    } 
}



/* setup variables, game, user, computer etc */
/*initiate while loop */
/*do logic if theres a winner get out of the loop and display the winners name*/
