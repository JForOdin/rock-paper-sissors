let newGame = new Game();
function chooseRock()
{
   newGame.updateGame("rock");
}
function choosePaper()
{
   newGame.updateGame("paper");
}
function chooseScissors()
{
    newGame.updateGame("scissors");
}
function reloadGame()
{
    setTimeout(function(){
        location.reload();
    }, 2000); 
}
function update()
{
    let actionText = document.getElementById("c-action");
    let scoreTextPlayer = document.getElementById("player-score");
    let scoreTextComputer = document.getElementById("computer-score");
    scoreTextPlayer.textContent = newGame.playerWins;
    scoreTextComputer.textContent = newGame.computerWins;
    if(newGame.playerWins >= 3 )
    {
        console.log("Congrats, You win this game!");
        actionText.textContent = "Congrats! You win this game!";
        reloadGame();  
    }
    else if(newGame.computerWins >= 3)
    {
        console.log("Sorry, You lost this game!");
        actionText.textContent = "Sorry! You lost this game!";
        reloadGame();
    } 
}
