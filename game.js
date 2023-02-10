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
        //return  Math.floor(Math.random()*3);
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
    getPlayerWins()
    {
        return this.playerWins;
    }
    getComputerWins()
    {
        return this.computerWins;
    }
    update(playersChoice)
    {
        let computersChoice = "";
        computersChoice =  this.getComputersChoice();
        console.log("You chose "+playersChoice+" and the computer chose: "+computersChoice);
        this.getWinnerOfRound(playersChoice,computersChoice);
       

    }
    getWinnerOfRound(playersChoice,computersChoice)
    {
        this.action = document.getElementById("c-action");
        if(playersChoice=="rock" && computersChoice=="paper")
        {
            console.log("you lose");
            this.action.textContent = "you lose!";
            this.computerWins++;
        }
        else if(playersChoice=="scissors" && computersChoice=="paper")
        {
            console.log("you win!");
            this.action.textContent = "you win!";
            this.playerWins++;
        }
        else if(playersChoice=="scissors" && computersChoice=="rock")
        {
            console.log("you lose");
            this.computerWins++;
            this.action.textContent = "you lose!";
        }
        else if(playersChoice=="paper" && computersChoice=="scissors")
        {
            console.log("you lose");
            this.computerWins++;
            this.action.textContent = "you lose!";
        }
        else if(playersChoice=="paper" && computersChoice=="rock")
        {
            console.log("you win!");
            this.playerWins++;
            this.action.textContent = "you win!";
        }
        else if(playersChoice=="rock" && computersChoice=="scissors")
        {
            console.log("you win");
            this.playerWins++;
            this.action.textContent = "you win!";
        }
        else
        {
            console.log("Tie!");
            this.action.textContent = "this round was a draw!";
        }
    }
    
}