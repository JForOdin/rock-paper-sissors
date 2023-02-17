class Game 
{
    constructor()
    {
        this.gameScore = 0;
        this.playerWins = 0;
        this.computerWins = 0;
    }
    getComputersChoice()
    {
        let randNumber = Math.floor(Math.random()*3);
        let computersChoice = "";
        switch(randNumber)
        {
            case 0:
                computersChoice= "rock";
                break;
            case 1:
                computersChoice= "paper";
                break;
            case 2:
                computersChoice= "scissors";
                break;
        }
        return computersChoice;
    }
    lose(playersChoice,computersChoice)
    {
        this.computerWins++;
        console.log("you lose");
        this.action.textContent = "You chose : "+playersChoice+" and the computer chose: "+computersChoice+". You lose this round!";
    }
    win(playersChoice,computersChoice)
    {
        this.playerWins++;
        console.log("you win!");
        this.action.textContent = "You chose : "+playersChoice+" and the computer chose: "+computersChoice+". You win this round!";
    }
    updateGame(playersChoice)
    {
        let computersChoice = "";
        computersChoice =  this.getComputersChoice();
        console.log("You chose "+playersChoice+" and the computer chose: "+computersChoice);
        this.getWinnerOfRound(playersChoice,computersChoice);
    }
    getWinnerOfRound(playersChoice,computersChoice)
    {
        this.action = document.getElementById("c-action");
        if(playersChoice==computersChoice)
        {
            console.log("Tie!");
            this.action.textContent = "You both chose "+playersChoice+". This round was a draw!";
        }
        else if(playersChoice=="rock" && computersChoice=="paper" || 
        playersChoice=="paper" && computersChoice=="scissors" )
        {
            this.lose(playersChoice,computersChoice);
        }
        else
        {
            this.win(playersChoice,computersChoice);            
        }
       
       
    }
    
}